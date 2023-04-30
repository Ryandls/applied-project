'use strict';

//example

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
