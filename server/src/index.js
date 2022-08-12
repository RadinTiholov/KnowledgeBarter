const express = require('express');
const mongoose = require('mongoose');
const path = require('path')

const {PORT} = require('./config/env.js');
const { DB_STRING }= require('./config/env.js');
const { auth } = require('./middlewares/authMiddleware.js');
const corsMiddleware = require('./middlewares/corsMiddleware.js');
const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(corsMiddleware());
app.use(auth());
app.use(routes);

mongoose.connect(DB_STRING)
.then(() => {
    console.log("DB connected");
})
.catch(() => {
    console.log("Failed to connect to DB");
});
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('../../client/knowledge-barter/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'../../client', 'knowledge-barter', 'build', 'index.html'))
    })
}
const port = process.env.PORT || PORT;
app.listen(PORT, () => {console.log(`The server is listening on port ${port}`);})