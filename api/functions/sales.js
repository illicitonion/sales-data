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
  if (code) {
    if (sales.hasOwnProperty(code)) {
      value = {[code]: sales[code]};
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
    body: JSON.stringify(value),
  };
};
