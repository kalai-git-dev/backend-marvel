require("dotenv").config();
const express = require("express");
const uid2 = require("uid2");
const formidable = require("express-formidable");
// const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const md5 = require("md5");
const app = express();
app.use(formidable());
app.use(cors());

apikey_public = process.env.APY_KEY;
private_key = process.env.PRIVATE_APY_KEY;

const ts = uid2(16);
const hash = md5(ts + private_key + apikey_public);
// console.log(ts);
// console.log(private_key);
// console.log(apikey_public);
app.get("/characters", async (req, res) => {
  const ts = uid2(16);
  const hash = md5(ts + private_key + apikey_public);
  try {
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${apikey_public}&hash=${hash}&limit=100`
    );

    res.send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/character/:id", async (req, res) => {
  try {
    const ts = uid2(16);
    const hash = md5(ts + private_key + apikey_public);
    const characterId = req.params.id;
    console.log(req.params);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/characters/${characterId}?ts=${ts}&apikey=${apikey_public}&hash=${hash}`
    );

    res.send(response.data.data);
  } catch (error) {
    console.log(error.message);
  }
});

app.get("/comics", async (req, res) => {
  try {
    const ts = uid2(16);
    const hash = md5(ts + private_key + apikey_public);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${apikey_public}&hash=${hash}&limit=100`
    );

    res.send(response.data);
  } catch (error) {
    console.log(error.message);
  }
});
app.get("/comic/:id", async (req, res) => {
  try {
    const ts = uid2(16);
    const hash = md5(ts + private_key + apikey_public);
    const comicId = req.params.id;
    console.log(req.params);
    const response = await axios.get(
      `http://gateway.marvel.com/v1/public/comics/${comicId}?ts=${ts}&apikey=${apikey_public}&hash=${hash}`
    );

    res.send(response.data.data);
  } catch (error) {
    console.log(error.message);
  }
});

// serveur  -----------------------------

app.listen(3001, () => {
  console.log("server started");
});
