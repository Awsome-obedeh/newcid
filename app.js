const express = require('express');
const usersRouter = require('./users');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', usersRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
