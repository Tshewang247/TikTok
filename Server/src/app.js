const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/api/videos',   require('./routes/videos'));
app.use('/api/users',    require('./routes/users'));
app.use('/api/comments', require('./routes/comments'));

module.exports = app;