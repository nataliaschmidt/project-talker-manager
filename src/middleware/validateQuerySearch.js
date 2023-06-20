const returnErrorMessage = require('../utils/errorMessages');

const validateRate = (rate) => {
let isValidRate = true;

if (!Number.isInteger(rate)) {
   isValidRate = false;
}
if (rate < 1 || rate > 5) {
   isValidRate = false;
}
return isValidRate;
};

const validateQuerySearch = (req, res, next) => {
  const { rate, date } = req.query;
  const rateNumber = Number(rate);
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (rate && validateRate(rateNumber) === false) {
   return returnErrorMessage(res, 400, 'O campo "rate" deve ser um número inteiro entre 1 e 5');
  }

  if (date && !isFormatDate.test(date)) {
   return returnErrorMessage(res, 400, 'O parâmetro "date" deve ter o formato "dd/mm/aaaa"');
  }

  return next();
};

module.exports = validateQuerySearch;