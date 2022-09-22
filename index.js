//set up express server

const express = require('express');
const app = express();

//MIDDLEWARE
app.use(express.urlencoded({ extended: false }));

//set up router living within api route
const apiRouter = require('./api');
app.use('/api', apiRouter);



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`connected on port ${PORT}`)
});