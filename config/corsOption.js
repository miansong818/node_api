

// run fetch('http://localhost:3500/index') at console of browser
// and remove google from whitelist, run again, will see the error
const whiteList = [
  'https://www.google.com',
  'http://127.0.0.1:5500',
  'http://localhost:3500',
];
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

module.exports = corsOptions;
