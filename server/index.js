require('dotenv/config');
const express = require('express');
const errorMiddleware = require('./error-middleware');
const staticMiddleware = require('./static-middleware');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const app = express();

app.use(staticMiddleware);

app.use(errorMiddleware);

const jsonMiddleware = express.json();

app.use(jsonMiddleware);

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`express server listening on port ${process.env.PORT}`);
});

app.get('/api/users', (req, res, next) => {
  const sql = `
    select *
      from "users"
  order by "userId"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.post('/api/users', (req, res, next) => {
  const { email, dueDate, babyName, password } = req.body;

  const sql = `
    insert into "users" ("email", "dueDate", "babyName", "password")
    values ($1, $2, $3, $4)
    returning *
  `;
  const params = [email, dueDate, babyName, password];
  db.query(sql, params)
    .then(result => {
      const [user] = result.rows;
      res.status(201).json(user);
    })
    .catch(err => next(err));
});
