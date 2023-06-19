const express = require('express');
const { findById } = require('../utils/fileUtils');
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

module.exports = talkerRoute;