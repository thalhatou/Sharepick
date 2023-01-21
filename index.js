const express = require('express')
const path = require('path')
const app = new express()
const port = 8080

app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'index.html'));
})

app.get('/about', (req, res) => {
    res.send('This is the about us page')
})




app.listen(port, () => {
    console.log(`App is up and running on port ${port}`)
})

