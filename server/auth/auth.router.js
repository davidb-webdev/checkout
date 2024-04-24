const express = require("express");
const router = express.Router();
const {
  signInCustomer,
  signOutCustomer,
  authorizeCustomer,
  getDeliveryData,
  getOrders
} = require("./auth.controller");

router.post("/signin", signInCustomer);
router.get("/signout", signOutCustomer);
router.get("/authorize", authorizeCustomer);
router.get("/getDeliveryData", getDeliveryData);
router.get("/getOrders", getOrders);

module.exports = router;
