'use strict';

const calculator = require("../services/calculator");

module.exports.example = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        name: 'Projeto Aplicado IGTI - 2023',
      },
      null,
      2
    ),
  };
};
