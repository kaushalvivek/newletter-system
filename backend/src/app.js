const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const userRouter = require('./routes/user.route');
const targetRouter = require('./routes/target.route');
const historyRouter = require('./routes/history.route');

app.use('/user', userRouter);
app.use('/target', targetRouter);
app.use('/history', historyRouter);

module.exports = app;
