const express = require('express');
const { readFile } = require('../utils/readAndWrite');

const talkerRoute = express.Router();

talkerRoute.get('/', async (req, res) => {
  const talkers = await readFile();
  if (!talkers) {
    return res.status(200).json([]);
  }
  return res.status(200).json(talkers);
  });

module.exports = talkerRoute;