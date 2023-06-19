const returnErrorMessage = require('../utils/errorMessages');

const validateName = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
   return returnErrorMessage(res, 400, 'O campo "name" é obrigatório');
  }

  if (name.length < 3) {
   return returnErrorMessage(res, 400, 'O "name" deve ter pelo menos 3 caracteres');
  }

  return next();
};

module.exports = validateName;