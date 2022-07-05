/* eslint-disable max-len */
const express = require('express');
const app = express();
const path = require('path');
const {logger} = require('./middleware/logEvent');
const cors = require('cors');
const corsOptions = require('./config/corsOption');
const errorHandler = require('./middleware/errorHandler');
// 1. create port and listerner
const port = process.env.port || 3500;

// custom middleware logger
app.use(logger);

/**
 * cors - Cross origin resource sharing
 * build-in middleware
 * */
app.use(cors(corsOptions));

// build-in middleware to handle urlencoded data
app.use(express.urlencoded({extended: false}));
// build-in middleware for json
app.use(express.json());
// serve static files
app.use('/', express.static(path.join(__dirname, '/public')));
app.use('/subdir', express.static(path.join(__dirname, '/public')));

// routes
app.use('/', require('./routes/root'));
// use subdir by routes
app.use('/subdir', require('./routes/subdir'));
// api route
app.use('/', require('./routes/api/employees'));

/**
 * 404 handler
 *  when use app all, for all http method, we need to handle all different type of request
*/
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

// server listener
app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});
