const express = require('express')
// const path = require('path')
const app = new express()
const Sequelize = require("sequelize");
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.set('view engine', 'ejs')
const port = 7000
// database
const db = require('./models')

//database connection

const sequelize = new Sequelize(
    'photos',
    'thalhatou',
    '7y8a1h64',
    {
        host: 'localhost',
        dialect: 'mariadb'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

// routes
app.get('/', (request, response) => {
    response.render('index');
})

app.get('/about', (req, res) => {
    res.send('This is the about us page')
})



// server
app.listen(port, () => {
    console.log(`App is up and running on port http://localhost:${port}`)
})

