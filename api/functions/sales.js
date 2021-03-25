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
  let statusCode = 200;
  let value = sales;
  const code = event.queryStringParameters.code;
  if (code) {
    if (sales.hasOwnProperty(code)) {
      value = {[code]: sales[code]};
    } else {
      statusCode = 200;
      value = {
        error: "Product not found"
      };
    }
  }
  return {
    statusCode: statusCode,
    body: JSON.stringify(value),
  };
};
