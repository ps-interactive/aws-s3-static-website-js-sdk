const { message } = require('./utils.js');

const createBucket = (name) => {};

const upload = (name) => {};

/*

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucketParams = {Bucket: process.argv[2]};

// call S3 to retrieve the website configuration for selected bucket
s3.getBucketWebsite(bucketParams, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else if (data) {
    console.log("Success", data);
  }
});

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Create JSON for putBucketWebsite parameters
var staticHostParams = {
  Bucket: '',
  WebsiteConfiguration: {
    ErrorDocument: {
      Key: ''
    },
    IndexDocument: {
      Suffix: ''
    },
  }
};

// Insert specified bucket name and index and error documents into params JSON
// from command line arguments
staticHostParams.Bucket = process.argv[2];
staticHostParams.WebsiteConfiguration.IndexDocument.Suffix = process.argv[3];
staticHostParams.WebsiteConfiguration.ErrorDocument.Key = process.argv[4];

// set the new website configuration on the selected bucket
s3.putBucketWebsite(staticHostParams, function(err, data) {
  if (err) {
    // display error message
    console.log("Error", err);
  } else {
    // update the displayed website configuration for the selected bucket
    console.log("Success", data);
  }
});

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'REGION'});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var bucketParams = {Bucket: process.argv[2]};

// call S3 to delete website configuration for selected bucket
s3.deleteBucketWebsite(bucketParams, function(error, data) {
  if (error) {
    console.log("Error", err);
  } else if (data) {
    console.log("Success", data);
  }
});

*/

const enableWebsiteConfig = (name) => {};

const disableWebsiteConfig = (name) => {};


/****
 CLI 
****/
const cli = require('./cli.js');
switch (cli.command) {
  case  'create': createBucket(cli.resourceName); break;
  case  'upload': upload(cli.resourceName); break;
  case  'enable': enableWebsiteConfig(cli.resourceName); break;
  case 'disable': disableWebsiteConfig(cli.resourceName); break;
  default       : console.error('Not a valid command!'); break;
}
