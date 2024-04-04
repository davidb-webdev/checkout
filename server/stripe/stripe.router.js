const express = require("express");
const { createCheckoutSession, getProducts } = require("./stripe.controller");
const router = express.Router();

router.post("/create-checkout-session", createCheckoutSession);
router.get("/products", getProducts);
module.exports = router;
