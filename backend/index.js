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

app.use(`${process.env.API_PREFIX}/urls`, urlRoute);

app.use((err, req, res, next) => {
    if (err.status) {
        return res.status(err.status).send(err.message);
    }
    res.status(500).json({ isSuccess: false, message: 'Internal server error!' });
});

app.use((req, res, next) => {
    res.status(404).json({ isSuccess: false, message: 'Resource not found!' });
    next();
});

app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
