/* eslint-disable max-len */
const http = require('http');
const path = require('path');
const fs = require('fs');
const fsPromises = require('fs').promises;

// 1. create port and listerner
const port = process.env.port || 3500;
// serve file
const serveFile = async (filePath, contentType, response)=>{
  try {
    const rawData = await fsPromises.readFile(filePath, 'utf8');
    console.log(rawData);
    const data = contentType === 'application/json'?JSON.parse(rawData): rawData;
    response.writeHead(200, {'Content-Type': contentType});
    response.end(data);
  } catch (e) {
    console.log(e);
    response.statusCode = 500;
    response.end(contentType ==='application/json'? JSON.stringify(data):data);
  }
};
// server
const server = http.createServer((req, res)=>{
  console.log(req.url, req.method);
  const extension = path.extname(req.url);
  let contentType;
  switch (extension) {
    case '.css':
      contentType = 'text/css';
      break;
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.jpg':
      contentType = 'image/jpeg';
      break;
    case '.txt':
      contentType = 'text/plain';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    default:
      contentType = 'text/html';
  }
  const defaultPath = path.join(__dirname, 'views', 'index.html');

  let filePath = contentType === 'text/html' && req.url==='/'? defaultPath: contentType === 'text/html' && req.url.slice(-1)==='/' ? path.join(__dirname, 'views', req.url, 'index.html') : contentType === 'text/html'? path.join(__dirname, 'views', req.url) : path.join(__dirname, req.url);

  // make .html extension dones require in ithe browser
  if (!extension && req.url.slice(-1)!=='/') filePath+='.html';

  const fileExists = fs.existsSync(filePath);

  if (fileExists) {
    // serve the file if exists
    serveFile(filePath, contentType, res);
  } else {
    // 404
    // 301 redirect
    console.log(path.parse(filePath));
    switch (path.parse(filePath).base) {
      case 'old-page.html':
        res.writeHead(301, {'Location': '/new-page.html'});
        res.end();
        break;
      case 'www-page.html':
        res.writeHead(301, {'Location': '/'});
        res.end();
        break;
      default:
        serveFile(path.join(__dirname, 'views', '404.html'), 'text/html', res);
    }
  }
  //   switch (req.url) {
  //     case '/':
  //       res.statusCode = 200;
  //       path = path.join(__dirname, 'views', 'index.html');
  //       fs.readFile(path, 'utf-8', (err, data)=>{
  //         res.end(data);
  //       });
  //       break;

//     //   default ;
//   }
});

// 3. server file
server.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});
