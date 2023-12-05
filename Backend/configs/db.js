const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect('mongodb+srv://ancongminh123:dimGA4Ng881vmX1i@minh.xbrvlww.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connected successfully to MongoDB");
});

module.exports = { connection };
