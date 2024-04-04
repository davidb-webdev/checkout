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

module.exports = { createCheckoutSession };
