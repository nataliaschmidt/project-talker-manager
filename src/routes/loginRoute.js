const express = require('express');
const generateToken = require('../utils/generateToken');

const loginRoute = express.Router();

loginRoute.post('/', (req, res) => {
  const { email, password } = req.body;

  if(email, password){
    const token = generateToken();
    return res.status(200).json({ token: token })
  }
});

module.exports = loginRoute;