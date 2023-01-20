const http = require('http')
const port = 8000
const sever = http.createServer(
    (request, response) => {
        if (request.url == '/about') 
        response.end('about us page');
        else if (request.url == '/login')
            response.end('login page');
        else if (request.url == 'logout')
            response.end('logout page');
     else {
         response.writeHead(404)
        response.end('page not found')
            
        }

    }
);

sever.listen(port)
console.log(`server is running on port ${port}`)



