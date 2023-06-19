const returnError400 = (res, messageError) => res.status(400).json({ message: messageError });

const validateEmail = (email) => {
  const regExpEmail = /[\w_.-]+@\w+(\.\w{2,3}){1,2}/g;
  const checkEmail = regExpEmail.test(email);
  return checkEmail;
};

const validateLogin = (req, res, next) => {
const { email, password } = req.body;
const isValidateEmail = validateEmail(email);

if (!email) {
  returnError400(res, 'O campo "email" é obrigatório');
} else if (!isValidateEmail) {
  returnError400(res, 'O "email" deve ter o formato "email@email.com"');
} else if (!password) {
  returnError400(res, 'O campo "password" é obrigatório');
} else if (password.length < 6) {
  returnError400(res, 'O "password" deve ter pelo menos 6 caracteres');
}
return next();
};

module.exports = validateLogin;