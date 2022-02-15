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


// get the template
// const getTemplate = (req,resp)=>{
//     fs.readFile('./templates/index.html', (err,template)=>{
//         if(err){
//             console.log(err);
//             resp.end();
//         }else{
//             resp.end(template);
//         }
//     })
// }


// get the css file
// const getCssFile = (req,res)=>{
//     let browser_is_requesting_css = req.url.includes('.css');
//     if(browser_is_requesting_css){
//         let css_path = path.join(current_directory, 'temlates', req.url);
//         console.log("req url ", req.url);
//         console.log("css path ",css_path);
//         console.log("current directory ",current_directory);
//         fs.readFile(css_path,(err,data)=>{
//             if(err){
//                 console.log(err);
//                 res.end();
//             }else{
//                 res.writeHead(200,{'Content-Type':'text/css'});
//                 res.end(data,'utf-8');
//             }
//         })
//     }
// }