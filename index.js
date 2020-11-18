require("dotenv").config();
const express = require("express");
const formidable = require("express-formidable");
const axios = require("axios");
// const uid2 = require("uid2");
const cors = require("cors");
const app = express();

app.use(cors);
app.use(formidable);

// apikey_public = process.env.API_KEY;
// private_key = process.env.PRIVATE_APY_KEY;

app.get("/comics", async (req, res) => {
  try {
    console.log("hello");
    // const date = new Date();
    // const ts = date.getTime();
    // const hash = md5(ts + private_key + apikey_public);
    // // console.log(ts);
    // // console.log(private_key);
    // // console.log(apikey_public);

    // const response = await axios.get(
    //   `https://gateway.marvel.com/v1/public/comics?ts=${ts}&apikey=${private_key}&hash=${hash}`
    // );

    res.json("response");
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(4000, () => {
  console.log("server started");
});

// `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${apikey}&hash=6f3863d97a51620ce8a9efb1b36a5564`;

// md5 (156f9c71f039ee9aebb31d0983b8d00e852362271a7b54b3a564f641f6a3253a67f82129d)
// hash =  6f3863d97a51620ce8a9efb1b36a5564

// ffd275c5130566a2916217b101f26150

// console.log(Math.floor(timestamp)); // va afficher qqchose comme 1582129584
