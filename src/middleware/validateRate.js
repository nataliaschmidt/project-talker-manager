const returnErrorMessage = require('../utils/errorMessages');
const { validateRate } = require('./validateQuerySearch');

const validateRateUpdate = (req, res, next) => {
  const { rate } = req.body;
const rateNumber = Number(rate);
  if (!rate && rateNumber !== 0) {
    return returnErrorMessage(res, 400, 'O campo "rate" é obrigatório');
  }
  if (validateRate(rateNumber) === false) {
    return returnErrorMessage(res, 400, 'O campo "rate" deve ser um número inteiro entre 1 e 5');
  }
  return next();
};

module.exports = validateRateUpdate;