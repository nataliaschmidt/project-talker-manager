const returnErrorMessage = require('../utils/errorMessages');

const validateAge = (req, res, next) => {
  const { age } = req.body;

  if (!age) {
   return returnErrorMessage(res, 400, 'O campo "age" é obrigatório');
  }

  if (typeof age !== 'number' || !Number.isInteger(age) || age < 18) {
   return returnErrorMessage(res, 400,
    'O campo "age" deve ser um número inteiro igual ou maior que 18');
  }

  return next();
};

module.exports = validateAge;