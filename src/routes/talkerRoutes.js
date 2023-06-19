const express = require('express');
const validateAge = require('../middleware/validateAge');
const validateAuthorization = require('../middleware/validateAuthorization');
const validateName = require('../middleware/validateName');
const { validateTalk,
  validateTalkWatchedAt,
  validateTalkRate } = require('../middleware/validateTalk');
const { findById, createTalker } = require('../utils/fileUtils');
const { readFile } = require('../utils/readAndWrite');

const talkerRoute = express.Router();

talkerRoute.get('/', async (req, res) => {
  const talkers = await readFile();
  if (!talkers) {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
  });

talkerRoute.get('/:id', async (req, res) => {
  const id = Number(req.params.id);
  const foundTalker = await findById(id);

  if (foundTalker) {
    return res.status(200).json(foundTalker);
  }
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

talkerRoute.post('/',
validateAuthorization,
validateName,
validateAge,
validateTalk,
validateTalkWatchedAt,
validateTalkRate,
async (req, res) => {
try {
  const talker = req.body;
  const newTalker = await createTalker(talker);
  console.log(newTalker);
  return res.status(201).json(newTalker);
} catch (error) {
console.error(error);
}
});

module.exports = talkerRoute;