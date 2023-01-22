const express = require('express')
const path = require('path')
const app = new express()
const  Sequelize = require("sequelize");
const bodyParser = require('body-parser')
app.use(express.static('public'))
app.set('view engine','ejs')
const port = 8080
// database
const db = require('./models')

//database connection
const sqlPort = 3307;
db.Sequelize
    .sync({})
    .then(() => {
        app.listen(sqlPort, () => {
            console.log('MariaDB connection was successful')
        })
    })
    .catch((error) => {
        console.error('unable to connect to mariaDB database')
    })


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

