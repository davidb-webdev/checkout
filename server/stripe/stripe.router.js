const express = require("express");
const {
  createCheckoutSession,
  getProducts,
  getProduct,
  verifySessionAndCreateOrder,
  createCustomer
} = require("./stripe.controller");
const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);
router.post("/verify-order", verifySessionAndCreateOrder);
router.post("/create-customer", createCustomer);
router.get("/products", getProducts);
router.get("/product/:id", getProduct);

module.exports = router;
