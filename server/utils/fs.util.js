const fs = require("fs").promises;

const readOrders = async () => {
  const data = await fs.readFile("./data/orders.json");
  return JSON.parse(data);
};

const writeOrders = async (orders) => {
  await fs.writeFile("./data/orders.json", JSON.stringify(orders, null, 2));
};

const readCustomers = async () => {
  const data = await fs.readFile("./data/customers.json");
  return JSON.parse(data);
};

const writeCustomers = async (customers) => {
  await fs.writeFile(
    "./data/customers.json",
    JSON.stringify(customers, null, 2)
  );
};

module.exports = { readOrders, writeOrders, readCustomers, writeCustomers };
