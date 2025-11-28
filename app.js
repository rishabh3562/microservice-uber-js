// app.js
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

// Basic route for testing under load
app.get('/', (req, res) => {
    res.status(200).json({ message: "OK" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server started at", PORT);
});
