const initStripe = require("./stripe.util");
const bcrypt = require("bcrypt");
const {
  readOrders,
  writeOrders,
  readCustomers,
  writeCustomers
} = require("../utils/fs.util.js");

const getProducts = async (req, res) => {
  try {
    const stripe = initStripe();
    const products = await stripe.products.list({
      active: true,
      limit: 10,
      ids: req.body,
      expand: ["data.default_price"]
    });
    return res.status(200).json(products);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const getProduct = async (req, res) => {
  try {
    const stripe = initStripe();
    const product = await stripe.products.retrieve(req.params.id, {
      expand: ["default_price"]
    });
    res.status(200).json(product);
  } catch (error) {
    return res.status(400).json(error);
  }
};

const createCheckoutSession = async (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  try {
    const stripe = initStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer: req.session.id,
      line_items: req.body.lineItems.map((item) => ({
        price: item.id,
        quantity: item.quantity
      })),
      allow_promotion_codes: true,
      success_url: "http://localhost:5173/confirmorder",
      cancel_url: "http://localhost:5173/checkout"
    });
    res.status(200).json({ url: session.url, sessionId: session.id });
  } catch (error) {
    return res.status(400).json(error);
  }
};

const verifySessionAndCreateOrder = async (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  try {
    const stripe = initStripe();
    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
    const lineItems = await stripe.checkout.sessions.listLineItems(
      req.body.sessionId
    );

    if (session.payment_status === "paid") {
      const orders = await readOrders();
      const orderExists = orders.find(
        (order) => order.sessionId === req.body.sessionId
      );

      if (!orderExists) {
        const order = {
          orderNumber: Math.floor(Math.random() * 1000000000),
          sessionId: req.body.sessionId,
          orderDate: new Date(),
          customerDetails: {
            id: session.customer,
            name: session.customer_details.name,
            email: session.customer_details.email
          },
          orderTotal: session.amount_total,
          products: lineItems.data.map((item) => {
            return {
              id: item.price.product,
              description: item.description,
              amount: item.price.unit_amount,
              quantity: item.quantity
            };
          })
        };
        orders.push(order);
        await writeOrders(orders);
      }

      return res.status(200).json("Order successful");
    }
  } catch (error) {
    return res.status(400).json(error);
  }

  res.status(400).json("Order failed");
};

const createCustomer = async (req, res) => {
  const {
    email,
    password,
    name,
    addressLine1,
    addressLine2,
    postal_code,
    city,
    country,
    phone
  } = req.body;
  const customers = await readCustomers();
  const customerExists = customers.find((customer) => customer.email === email);

  if (customerExists) {
    return res.status(400).json("E-mail address already used");
  }

  const stripe = initStripe();
  let stripeCustomer;

  try {
    stripeCustomer = await stripe.customers.create({
      email,
      name,
      phone,
      address: {
        line1: addressLine1,
        line2: addressLine2,
        postal_code,
        city,
        country
      }
    });
  } catch (error) {
    return res.status(400).json(error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newCustomer = {
    id: stripeCustomer.id,
    email,
    password: hashedPassword,
    name,
    addressLine1,
    addressLine2,
    postal_code,
    city,
    country,
    phone
  };
  customers.push(newCustomer);
  writeCustomers(customers);

  return res.status(200).json("Customer registered");
};

module.exports = {
  getProducts,
  getProduct,
  createCheckoutSession,
  verifySessionAndCreateOrder,
  createCustomer
};
