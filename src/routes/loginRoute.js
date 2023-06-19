const express = require('express');
const validateLogin = require('../middleware/validateLogin');
const generateToken = require('../utils/generateToken');

const loginRoute = express.Router();

loginRoute.post('/', validateLogin, (req, res) => {
 try {
   const token = generateToken();
   return res.status(200).json({ token });
 } catch (error) {
  console.error(error);
 }
});

module.exports = loginRoute;