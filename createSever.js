const http = require('http')
const port = 8000
const sever = http.createServer(
    (request, response) => {
        console.log(request.url);
        response.end('hello world')


    }
)

sever.listen(port)
console.log(`server is running on port ${port}`)



