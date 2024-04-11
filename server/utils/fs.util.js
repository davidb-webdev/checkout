const fs = require("fs").promises;

const readOrders = async () => {
  const data = await fs.readFile("./data/orders.json");
  return JSON.parse(data);
};

const writeOrders = async (content) => {
  await fs.writeFile("./data/orders.json", JSON.stringify(content, null, 2));
};

module.exports = { readOrders, writeOrders };
