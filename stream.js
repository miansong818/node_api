const fs = require('fs');
const path = require('path');

const filePath = path.join('files', 'text2.txt');
console.log(filePath);
const re = fs.createReadStream(filePath, {encoding: 'utf8'});

const filePath2 = path.join('files', 'text4.txt');
const ws = fs.createWriteStream(filePath2);

re.on('data', (dataChunk)=>{
  console.log(dataChunk);
  ws.write(dataChunk);
});
