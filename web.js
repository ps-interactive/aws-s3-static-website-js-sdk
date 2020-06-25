const { message } = require('./utils.js');

const AWS = require('aws-sdk');
AWS.config.update({region: 'REGION'});

const s3 = new AWS.S3({apiVersion: '2006-03-01'});

const createBucket = (name) => {
  const params = { "Bucket": name };
  s3.createBucket(params, message);
};

const upload = (bucket, name) => {
  const params = { "Bucket": bucket, "Key": "", "Body": "" };
  const fileStream = fs.createReadStream(name);
  fileStream.on("error", err => console.log("File Error", err));
  
  params.Body = fileStream;
  params.Key = path.basename(name);

  s3.upload(params,  (err, data) => {
    if (err) { console.log("Error", err); } 
    else { console.log("Upload Success", data.Location); }
  });
};

const getWebsiteConfig = (name) => {
  const params = { "Bucket": name };
  s3.getBucketWebsite(params, message);
};

const enableWebsiteConfig = (name, index, error) => {
  const params = {
    "Bucket": name,
    "WebsiteConfiguration": {
      "ErrorDocument": { "Key": "" },
      "IndexDocument": { "Suffix": "" },
    }
  };

  params.Bucket = name;
  params.WebsiteConfiguration.IndexDocument.Suffix = index;
  params.WebsiteConfiguration.ErrorDocument.Key = error;

  s3.putBucketWebsite(params, message);
};

const disableWebsiteConfig = (name) => {
  const params = { Bucket: name };
  s3.deleteBucketWebsite(params, message);
};


/****
 CLI 
****/
const cli = require('./cli.js');
switch (cli.command) {
  case  'create': createBucket(cli.resourceName); break;
  case  'upload': upload(cli.resourceName); break;
  case  'enable': enableWebsiteConfig(cli.resourceName, cli.index, cli.error); break;
  case 'disable': disableWebsiteConfig(cli.resourceName); break;
  default       : console.error('Not a valid command!'); break;
}
