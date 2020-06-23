const { message } = require('./utils.js');

const createBucket = (name) => {};

const upload = (name) => {};

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
