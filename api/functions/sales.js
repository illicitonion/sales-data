const sales = {
  A15: {
    originalPrice: 0.2,
    salePrice: 0.15,
  },
  C01: {
    originalPrice: 5,
    salePrice: 4.5,
  },
  P01: {
    originalPrice: 4,
    salePrice: 0.5,
  },
  P02: {
    originalPrice: 0.6,
    salePrice: 0.5,
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
