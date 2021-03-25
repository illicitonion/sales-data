const express = require("express");
const serverless = require('serverless-http');

const app = express();
const port = 3000;

const sales = {
  C01: {
    originalPrice: 5,
    salePrice: 2.5,
  },
  A15: {
    originalPrice: 0.2,
    salePrice: 0.15,
  },
};

app.get("/", (req, res) => {
  res.send("I'm a handy API server from a supermarket");
})

app.get("/sales", (req, res) => {
  let value = sales;
  if (req.query.code) {
    if (sales.hasOwnProperty(req.query.code)) {
      value = {[req.query.code]: sales[req.query.code]};
    } else {
      res.status(404);
      value = {error: "Product not found"};
   }
  }
  res.send(value);
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

module.exports.handler = serverless(app);
