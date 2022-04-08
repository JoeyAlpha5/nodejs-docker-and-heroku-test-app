// const http = require('http');
const fs = require('fs');
const path = require('path');
const current_directory = __dirname;
const static_path = path.join(current_directory, 'static');
const express = require('express')
const app = express()
// serve static files
app.use('/static',express.static(static_path))

// initialise ports and hostname
const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

//server using http module
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     getCssFile(req,res)
//     getTemplate(req, res);
// });




// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });


// express server


// server using express
app.get('', (req, res) => {
    res.sendFile(`${current_directory}/templates/index.html`);
})

app.get('/about', (req, res) => {
    res.sendFile(`${current_directory}/templates/about.html`);
})

app.get('/contact', (req, res) => {
    res.sendFile(`${current_directory}/templates/contact.html`);
})



app.listen(port, () => {
    console.log(`Server is running`)
})



