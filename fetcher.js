// Take in two command line arguments
// 1. a URL
// 2. a local file path

// -> download the resource at the URL to the local path on your machine
// -> Upon completion, print out "Downloaded and saved 1235 bytes to ./index.html"

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);

request(args[0], (error, response, body) => {
  console.log('error', error);
  console.log('statusCode', response && response.statusCode);
  if (body) {
    writeFile(body);
  }
})

const writeFile = (body) => {
  let totalSize = 0;
  for (let char of body) {
    if (typeof char === 'string') {
      totalSize += 1;
    }
  }
  const filePath = `/Users/lindsayward/lighthouse/${args[1]}`
  fs.writeFile(filePath, body, err => {
    if (err) {
      console.log(err);
    }
    console.log(`Downloaded and saved ${totalSize} bytes to ${args[1]}.`);
  })
}