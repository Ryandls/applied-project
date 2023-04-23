'use strict';

const calculator = require("../services/calculator");

module.exports.example = async (event) => {
  console.log(process.env.URL_API)
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: 'teste',
        message: 'Go Serverless v1.0! Your function executed successfully!',
        resultCalculeted: calculator.sum(10, 10),
      },
      null,
      2
    ),
  };
};
