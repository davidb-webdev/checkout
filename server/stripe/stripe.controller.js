const initStripe = require("./stripe.util");

const createCheckoutSession = async (req, res) => {
  const stripe = initStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: [
      {
        price: process.env.EXAMPLE_PRICE_ID,
        quantity: 1
      }
    ],
    success_url: "http://localhost:5173",
    cancel_url: "http://localhost:5173"
  });
  res.status(200).json({ url: session.url });
};

const getProducts = async (req, res) => {
  const stripe = initStripe();

  const products = await stripe.products.list({
    active: true,
    limit: 10
  });

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const stripe = initStripe();

  const product = await stripe.products.retrieve(req.params.id);

  res.status(200).json(product);
};

module.exports = { createCheckoutSession, getProducts, getProduct };
