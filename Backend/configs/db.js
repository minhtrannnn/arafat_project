const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected successfully to MongoDB");
});

module.exports = { connection };
