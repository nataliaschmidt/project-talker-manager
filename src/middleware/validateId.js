const returnErrorMessage = require('../utils/errorMessages');
const { readFile } = require('../utils/readAndWrite');

const validateId = async (req, res, next) => {
  const id = Number(req.params.id);
const talkers = await readFile();

const isFoundId = talkers.some((talker) => talker.id === id);
  if (!isFoundId) {
   return returnErrorMessage(res, 404, 'Pessoa palestrante não encontrada');
  }
  return next();
};

module.exports = validateId;