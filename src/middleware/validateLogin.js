const returnErrorMessage = require('../utils/errorMessages');

const validateEmail = (email) => {
  const regExpEmail = /[\w_.-]+@\w+(\.\w{2,3}){1,2}/g;
  const checkEmail = regExpEmail.test(email);
  return checkEmail;
};

const validateLogin = (req, res, next) => {
const { email, password } = req.body;
const isValidateEmail = validateEmail(email);

if (!email) {
 return returnErrorMessage(res, 400, 'O campo "email" é obrigatório');
} if (!isValidateEmail) {
 return returnErrorMessage(res, 400, 'O "email" deve ter o formato "email@email.com"');
} if (!password) {
  return returnErrorMessage(res, 400, 'O campo "password" é obrigatório');
} if (password.length < 6) {
 return returnErrorMessage(res, 400, 'O "password" deve ter pelo menos 6 caracteres');
}
return next();
};

module.exports = validateLogin;