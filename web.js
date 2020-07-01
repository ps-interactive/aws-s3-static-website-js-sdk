const fs = require('fs');
const path = require('path');

const { message, paths, upload } = require('./utils.js');

/******************
 AWS Configuration 
******************/



const createUpload = (name, dir) => {};

const enableWebsiteConfig = (name, index, error) => {};

const getWebsiteConfig = (name) => {};

const disableWebsiteConfig = (name) => {};

/****
 CLI 
****/
const cli = require('./cli.js');
switch (cli.command) {
  case  'create': createUpload(cli.resource, cli.dir_index); break;
  case     'get': getWebsiteConfig(cli.resource); break;
  case  'enable': enableWebsiteConfig(cli.resource, cli.dir_index, cli.error); break;
  case 'disable': disableWebsiteConfig(cli.resource); break;
  default       : console.error('Not a valid command!'); break;
}
