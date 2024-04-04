const express = require("express");
const cors = require("cors");
require("dotenv").config();

const stripeRouter = require("./stripe/stripe.router");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/stripe", stripeRouter);

app.listen(process.env.BACKEND_PORT, () => console.log("Running"));
