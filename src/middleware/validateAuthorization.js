const returnErrorMessage = require('../utils/errorMessages');

const validateAuthorization = (req, res, next) => {
  const { authorization } = req.headers;
if (!authorization) {
  return returnErrorMessage(res, 401, 'Token não encontrado');
} if (typeof authorization !== 'string' || authorization.length !== 16) {
 return returnErrorMessage(res, 401, 'Token inválido');
}
return next();
};

module.exports = validateAuthorization;