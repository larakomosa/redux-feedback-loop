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

router.delete('/:id', (req, res) => {
  // req.params is {} { id: '' }
  const taskId = req.params.id;
  const queryText = `DELETE FROM "feedback" WHERE id=$1;`;
  const queryArrayData = [taskId];

  pool
    .query(queryText, queryArrayData)
    .then((dbResponse) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM "feedback" ORDER BY "id" DESC;';

  pool
    .query(queryText)
    .then((dbResponse) => {
      console.log(dbResponse);
      res.send(dbResponse.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
