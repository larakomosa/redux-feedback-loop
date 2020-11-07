const express = require('express');
const router = express.Router();

const pool = require('../modules/pool');

router.post('/', (req, res) => {
  let form = req.body;
  console.log(`Adding feedback`, newFeedback);
  let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
  VALUES ($1, $2, $3, $4);`;

  pool
    .query(queryText, [
      form.feeling,
      form.understanding,
      form.support,
      form.comments,
    ])
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`put error`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
