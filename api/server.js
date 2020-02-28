const express = require('express');
const link = require('./app/link');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const port = 9000;
app.use(express.json());
app.use(express.static('public'));
app.use(cors());

const start = async () => {
  await mongoose.connect('mongodb://localhost/shortLink', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.use('/link', link);

  app.listen(port, () => {
    console.log(`Server started on ${port} port`);
  });
};

start().catch(err => {
  console.error(err);
});
