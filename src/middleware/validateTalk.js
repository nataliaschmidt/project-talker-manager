const returnErrorMessage = require('../utils/errorMessages');

const validateTalk = (req, res, next) => {
  const { talk } = req.body;

  if (!talk) {
    return returnErrorMessage(res, 400, 'O campo "talk" é obrigatório');
  }
  if (!talk.rate && talk.rate !== 0) {
    return returnErrorMessage(res, 400, 'O campo "rate" é obrigatório');
  }
  return next();
};

const validateTalkWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  const isFormatDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

  if (!watchedAt) {
    return returnErrorMessage(res, 400, 'O campo "watchedAt" é obrigatório');
  } if (!isFormatDate.test(watchedAt)) {
    return returnErrorMessage(res, 400, 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
  }
  return next();
};

const validateTalkRate = (req, res, next) => {
  const { talk: { rate } } = req.body;
  if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
    return returnErrorMessage(res, 400, 'O campo "rate" deve ser um número inteiro entre 1 e 5');
  }
  return next();
};

module.exports = {
  validateTalk,
validateTalkWatchedAt,
validateTalkRate,
};