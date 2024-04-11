const initStripe = require("./stripe.util");
const bcrypt = require("bcrypt");
const {
  readOrders,
  writeOrders,
  readCustomers,
  writeCustomers
} = require("../utils/fs.util.js");

const getProducts = async (req, res) => {
  const stripe = initStripe();

  const products = await stripe.products.list({
    active: true,
    limit: 10,
    expand: ["data.default_price"]
  });

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const stripe = initStripe();

  const product = await stripe.products.retrieve(req.params.id, {
    expand: ["default_price"]
  });

  res.status(200).json(product);
};

const createCheckoutSession = async (req, res) => {
  // TODO: Only create one session?
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  const stripe = initStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer: req.session.id,
    line_items: req.body.map((item) => ({
      price: item.id,
      quantity: item.quantity
    })),
    success_url: "http://localhost:5173/confirmorder",
    cancel_url: "http://localhost:5173/checkout"
  });
  res.status(200).json({ url: session.url, sessionId: session.id });
};

const verifySessionAndCreateOrder = async (req, res) => {
  // TODO: Only create one order
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  const stripe = initStripe();
  const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
  const lineItems = await stripe.checkout.sessions.listLineItems(
    req.body.sessionId
  );

  console.log(session);
  console.log(lineItems);

  if (session.payment_status === "paid") {
    const order = {
      orderNumber: Math.floor(Math.random() * 1000000000),
      orderDate: new Date(),
      customerDetails: {
        id: session.customer,
        name: session.customer_details.name,
        email: session.customer_details.email
      },
      orderTotal: session.amount_total,
      deliveryPoint: 999,
      products: lineItems.data.map((item) => {
        return {
          id: item.price.product,
          amount: item.price.unit_amount,
          quantity: item.quantity
        };
      })
    };

    const orders = await readOrders();
    orders.push(order);
    await writeOrders(orders);

    return res.status(200).json("Order successful");
  }

  res.status(400).json("Order failed");
};

const createCustomer = async (req, res) => {
  const { email, password } = req.body;
  const customers = await readCustomers();
  const customerExists = customers.find((customer) => customer.email === email);

  if (customerExists) {
    return res.status(400).json("E-mail address already used");
  }

  const stripe = initStripe();
  let stripeCustomer;

  try {
    stripeCustomer = await stripe.customers.create({
      name: req.body.name,
      email: req.body.email
    });
  } catch (error) {
    return res.status(400).json("stripe" + error);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newCustomer = {
    id: stripeCustomer.id,
    email,
    password: hashedPassword
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
