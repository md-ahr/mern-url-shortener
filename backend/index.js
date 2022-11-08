require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/dbConfig');
const urlRoute = require('./route/urlRoute');

const app = express();

connectDB();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(`${process.env.API_PREFIX}/url`, urlRoute);

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
