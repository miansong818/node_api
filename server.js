/* eslint-disable max-len */
const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvent');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
// 1. create port and listerner
const port = process.env.port || 3500;

// custom middleware logger
app.use(logger);

// build-in middleware to handle urlencoded data
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));

// cors - Cross origin resource sharing
// run fetch('http://localhost:3500/index') at console of browser
// and remove google from whitelist, run again, will see the error
const whiteList = ['https://www.google.com', 'http://127.0.0.1:5500', 'http://localhost:3500'];
const corsOptions = {
  // anonymous function
  origin: (origin, callback)=>{
    if (whiteList.indexOf(origin)!==-1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));


app.get('^/$|/index(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/home(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/home(.html)?', (req, res)=>{
  // either way to send file to view
  //   res.sendFile('./views/index.html', {root: __dirname});
  res.redirect(301, '/home.html');
});

const one =(req, res, next)=>{
  console.log('one');
  next();
};
const two =(req, res, next)=>{
  console.log('two');
  next();
};

app.get('/chain(.html)?', [one, two]);

// when use app all, for all http method, we need to handle all different type of request
app.all('*', (req, res)=>{
  res.status(404);
  if (req.accepts('html')) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({error: '404 Not Found'});
  } else {
    res.type('txt').send('404 Not found');
  }
});

app.use(errorHandler);

// serve file
app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});
