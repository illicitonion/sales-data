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

exports.handler = async (event, context) => {
  let value = sales;
  const code = event.queryStringParameters.code;
  if (req.query.code) {
    if (sales.hasOwnProperty(req.query.code)) {
      value = {[req.query.code]: sales[req.query.code]};
    } else {
      return {
        statusCode: 404,
        body: {
          error: "Product not found",
        },
      };
   }
  }
  return {
    statusCode: 200,
    value: value,
  };
};
