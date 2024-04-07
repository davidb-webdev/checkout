const initStripe = require("./stripe.util");

const createCheckoutSession = async (req, res) => {
  const stripe = initStripe();
  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    line_items: req.body.map((item) => ({
      price: item.id,
      quantity: item.quantity
    })),
    success_url: "http://localhost:5173/ordersuccess",
    cancel_url: "http://localhost:5173"
  });
  res.status(200).json({ url: session.url });
};

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

module.exports = { createCheckoutSession, getProducts, getProduct };
