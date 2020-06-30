const { message, paths } = require('./utils.js');

const AWS = require('aws-sdk');
AWS.config.region = 'us-west-2';
AWS.config.apiVersions = { 's3': '2006-03-01' };

const s3 = new AWS.S3();

const createUpload = (name, dir) => {
  console.log(paths(dir))
};

const getWebsiteConfig = (name) => {
  s3.getBucketWebsite({ "Bucket": name }, message);
};

const enableWebsiteConfig = (name, index, error) => {
  const params = {
    "Bucket": name,
    "WebsiteConfiguration": {
      "IndexDocument": { "Suffix": index },
      "ErrorDocument": { "Key": error },
    }
  };
  s3.putBucketWebsite(params, message);
};

const disableWebsiteConfig = (name) => {
  s3.deleteBucketWebsite({ "Bucket": name }, message);
};

/****
 CLI 
****/
const cli = require('./cli.js');
switch (cli.command) {
  case  'create': createUpload(cli.resource, cli.dir); break;
  case  'upload': upload(cli.resource); break;
  case     'get': getWebsiteConfig(cli.resource); break;
  case  'enable': enableWebsiteConfig(cli.resource, cli.index, cli.error); break;
  case 'disable': disableWebsiteConfig(cli.resource); break;
  default       : console.error('Not a valid command!'); break;
}
