"use strict"

//const calculator = require("../src/services/calculator")
function sum(value1, value2) {
  return value1 + value2
}

module.exports.example = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: "Projeto Aplicado IGTI - 2023",
        function: sum(10, 5),
      },
      null,
      2
    ),
  }
}
