const express = require("express");
const router = express.Router();
const {
  signInCustomer,
  signOutCustomer,
  authorizeCustomer
} = require("./auth.controller");

router.post("/signin", signInCustomer);
router.get("/signout", signOutCustomer);
router.get("/authorize", authorizeCustomer);

module.exports = router;
