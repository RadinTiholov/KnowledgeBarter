const express = require('express');
const mongoose = require('mongoose');

const {PORT} = require('./config/env.js');
const { DB_STRING }= require('./config/env.js');
const routes = require('./routes');

const app = express();
app.use(routes);

mongoose.connect(DB_STRING)
.then(() => {
    console.log("DB connected");
})
.catch(() => {
    console.log("Failed to connect to DB");
});

app.listen(PORT, () => {console.log(`The server is listening on port ${PORT}`);})