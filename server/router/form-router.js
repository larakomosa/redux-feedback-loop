const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let form = req.body;
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;
  queryArray = [form.feeling, form.understanding, form.support, form.comments];

  pool
    .query(queryText, queryArray)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`server side post error`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
