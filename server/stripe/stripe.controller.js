const initStripe = require("./stripe.util");
const { readOrders, writeOrders } = require("../utils/fs.util.js");

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
  const stripe = initStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: req.body.map((item) => ({
      price: item.id,
      quantity: item.quantity
    })),
    success_url: "http://localhost:5173/confirmorder",
    cancel_url: "http://localhost:5173/checkout"
  });
  console.log(session.id);
  res.status(200).json({ url: session.url, sessionId: session.id });
};

const verifySessionAndCreateOrder = async (req, res) => {
  const stripe = initStripe();

  const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
  console.log(session);

  // create order, send confirmation to frontend
  if (session.payment_status === "paid") {
    const order = {
      orderNumber: Math.floor(Math.random() * 1000000000),
      orderDate: new Date(),
      customerId: 999,
      orderTotal: 999,
      deliveryPoint: 999
    };

    const orders = await readOrders();
    orders.push(order);
    await writeOrders(orders);
  }

  res.status(200).json("Order successful");
};

module.exports = {
  getProducts,
  getProduct,
  createCheckoutSession,
  verifySessionAndCreateOrder
};
