const fs = require('fs');
const path = require('path');

// fs.readFile('./files/textFile.txt', 'utf8', (err, data)=>{
//   if (err) throw err;
//   console.log(data);
// });

// console.log('read console first!');


const filePath = path.join(__dirname, 'files', 'text2.txt');
// console.log(filePath);

// // write into the file
// fs.writeFile(filePath, 'This is Cathy!', (err, data)=>{
//   if (err) throw err;
//   console.log('Write file');
// });


// fs.readFile(filePath, 'utf8', (err, data)=>{
//   if (err) throw err;
//   console.log(data);
// });

// // fs.appendFile
const appendFile = path.join(__dirname, 'files', 'text3.txt');
fs.appendFile(appendFile, 'Hello, I am new !', (err, data)=>{
  if (err) throw err;
  console.log(data);
});


// fs.rename

// make it promise for fs actions
const fileOps = async ()=>{
  try {
    const data = await fs.promises.readFile(filePath, 'utf-8');
    console.log(data);
    await fs.promises.unlink(appendFile);
    console.log('unlink the file successfully');
  } catch (e) {
    console.error(e);
  }
};

fileOps(filePath);

// exit on uncaught error
// process.on('uncaughtException', (err)=>{
//   console.error(`THere is an uncaught error: ${err}`);
//   process.exit(1);
// });
