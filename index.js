const express = require('express')
const path = require('path')
const app = new express()
app.use(express.static('public'))
app.set('view engine','ejs')
const port = 8080

app.get('/', (request, response) => {
    response.render('index');
})

app.get('/about', (req, res) => {
    res.send('This is the about us page')
})




app.listen(port, () => {
    console.log(`App is up and running on port http://localhost:${port}`)
})

