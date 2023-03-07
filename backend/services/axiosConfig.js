const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.EXTERNAL_API_BASE_URL,
});

module.exports = instance;
