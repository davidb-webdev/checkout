const { readCustomers, readOrders } = require("../utils/fs.util.js");
const bcrypt = require("bcrypt");

const signInCustomer = async (req, res) => {
  const { email, password } = req.body;

  const customers = await readCustomers();
  const customerExists = customers.find((customer) => customer.email === email);

  if (
    !customerExists ||
    !(await bcrypt.compare(password, customerExists.password))
  ) {
    return res.status(400).json("Wrong username or password");
  }

  req.session.id = customerExists.id;
  res.status(200).json("Signed in");
};

const signOutCustomer = (req, res) => {
  req.session = null;
  res.status(200).json("Signed out");
};

const authorizeCustomer = (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }
  return res.status(200).json("You are signed in");
};

const getDeliveryData = async (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  const customers = await readCustomers();
  const thisCustomer = customers.find(
    (customer) => customer.id === req.session.id
  );

  const {
    name,
    addressLine1,
    addressLine2,
    postal_code,
    city,
    country,
    phone
  } = thisCustomer;
  const deliveryData = {
    name,
    addressLine1,
    addressLine2,
    postal_code,
    city,
    country,
    phone
  };
  return res.status(200).json(deliveryData);
};

const getOrders = async (req, res) => {
  if (!req.session.id) {
    return res.status(401).json("You are not signed in");
  }

  const orders = await readOrders();
  const customerOrders = orders.filter(
    (order) => order.customerDetails.id === req.session.id
  );
  return res.status(200).json(customerOrders);
};

module.exports = {
  signInCustomer,
  signOutCustomer,
  authorizeCustomer,
  getDeliveryData,
  getOrders
};
