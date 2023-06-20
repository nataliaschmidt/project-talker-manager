const express = require('express');
const validateAge = require('../middleware/validateAge');
const validateAuthorization = require('../middleware/validateAuthorization');
const validateId = require('../middleware/validateId');
const validateName = require('../middleware/validateName');
const { validateTalk,
  validateTalkWatchedAt,
  validateTalkRate } = require('../middleware/validateTalk');
const { findById,
  createTalker,
  updateTalker,
  deleteTalker,
  searchByName, 
  searchTalkers} = require('../utils/fileUtils');
const { readFile } = require('../utils/readAndWrite');

const talkerRoute = express.Router();

talkerRoute.get('/search', validateAuthorization, async (req, res) => {
  try {
    const { q, rate, date } = req.query;
    console.log(`q ${q}, rate ${rate}, date ${date}`);
    const filteredTalkers = await searchTalkers(q, rate, date);
  return res.status(200).json(filteredTalkers);
  } catch (error) {
    console.error(error);
  }
});

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
  return res.status(201).json(newTalker);
} catch (error) {
console.error(error);
}
});

talkerRoute.put('/:id',
validateAuthorization,
validateName,
validateAge,
validateTalk,
validateTalkWatchedAt,
validateTalkRate,
validateId,
async (req, res) => {
 try {
  const id = Number(req.params.id);
  const talkerToUpdate = req.body;
  const newUpdateTalker = await updateTalker(id, talkerToUpdate);
  return res.status(200).json(newUpdateTalker);
 } catch (error) {
  console.error(error);
 }
});

talkerRoute.delete('/:id', validateAuthorization, async (req, res) => {
try {
  const id = Number(req.params.id);
  await deleteTalker(id);
  return res.sendStatus(204);
} catch (error) {
  console.error(error);
}
});

module.exports = talkerRoute;