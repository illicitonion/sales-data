# Supermarket API

TODO: Host this somewhere and link to it.

GET /sales

Parameters:

| Name            | Description                                                                              |
|-----------------|------------------------------------------------------------------------------------------|
| code (optional) | The code of the product to look up sales for. If omitted, all products will be returned. |

Returns information related to sales currently on.

Data will be in JSON format.

Example request:

`GET /sales`

Response:

```
{
  "C01": {
    "originalPrice": 5.00,
    "salePrice": 2.50
  },
  "A15": {
    "originalPrice": 0.20,
    "salePrice": 0.15
  }
}
```

Example request with code paramter:

`GET /sales?code=C01`

Response:

```
{
  "C01": {
    "originalPrice": 5.00,
    "salePrice": 2.50
  }
}
```

The API will return an error with a status code 429 if more than one request is made per second.
