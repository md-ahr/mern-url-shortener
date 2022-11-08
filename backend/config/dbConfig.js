const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI);
        console.log(`Database connected successfully on ${db.connection.host}:${db.connection.port}`);
    } catch (error) {
        console.log(`Database error - ${error}`);
    }
};

module.exports = connectDB;
