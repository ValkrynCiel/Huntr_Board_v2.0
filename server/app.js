const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'my password';
const someOtherPlaintextPassword = 'not_bacon';

const db = require('./db');
const ExpressError = require('./expressError');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/users', async function(req, res, next) {
  const results = await db.query(
    `SELECT username, password 
    FROM users`
    );
  return res.json(results.rows);
})

app.post('/users', async function(req, res, next) {
  try {
    const { username, password } = req.body;

    const results = await db.query(
      `INSERT INTO users (username, password)
      VALUES ($1, $2)
      RETURNING username`,
      [username, password]);
      
    return res.status(201).json(results.rows[0]);
  } catch (err) {
    return next(err);
  }
})

app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});


app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.message;

  // set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

app.listen(3000, () => {
  //generate a hashed password
  
  // bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
  //   users['hello'] = hash;
  //   //compare a hashed password
  //   bcrypt.compare('not the password', users['hello'], function(err, result) {
  //     console.log(result)
  //   });
  // });
  console.log('listening on 3000')
  
  
});