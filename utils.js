const fs = require('fs');
const path = require('path');

const AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
AWS.config.apiVersions = { 's3': '2006-03-01' };

const s3 = new AWS.S3();

const message = (err, data) => {
  if (err) { console.log(`Error: ${err.message}`); }
  else if (data) {
    const json = JSON.stringify(data);
    if(Object.keys(data).length > 1) {
      fs.writeFileSync(`json/${Object.keys(data)[1]}.json`, json, 'utf-8');
    }
    console.log(`Success: ${json}`);
  }
};

const paths = (dir, container) => {
  const files = fs.readdirSync(dir)
  container = container || []
  files.forEach((file) => {
    if (fs.statSync(dir + "/" + file).isDirectory()) {
      container = paths(dir + "/" + file, container);
    } else {
      container.push(path.join(dir, "/", file));
    }
  })
  return container;
}

const upload = (name, dir, file) => {
  const fileStream = fs.createReadStream(file);
  fileStream.on("error", err => console.log("File Error", err));
  const params = { "Bucket": name, "Key": file, "Body": fileStream };
  s3.upload(params, (err, data) => {
    if (err) { console.log("Error", err); } 
    else { console.log("Upload Success", data.Location); }
  });
}

module.exports = { message, paths };
