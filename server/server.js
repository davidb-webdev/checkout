const express = require("express");
const cookieSession = require("cookie-session");
const cors = require("cors");
require("dotenv").config();

const stripeRouter = require("./stripe/stripe.router");
const authRouter = require("./auth/auth.router");

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);
app.use(
  cookieSession({
    secret: process.env.COOKIESESSION_SECRET,
    maxAge: 1000 * 60 * 60 // 60 min
  })
);

// Routes
app.use("/stripe", stripeRouter);
app.use("/auth", authRouter);

// Listeners
app.listen(process.env.BACKEND_PORT, () => console.log("Running"));
