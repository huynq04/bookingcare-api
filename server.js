require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { corsOptions } = require('./config/cors');
const { connectDataBase } = require('./config/connectDatabase');

const app = express();

app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // phải có cái này thì mới dùng được cors

// connect to database
connectDataBase();

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
