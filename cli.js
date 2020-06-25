const parse = require('minimist')(process.argv.slice(2));
const command = parse._[0];
const resourceName = parse._[1];
const index = parse._[2];
const error = parse._[3];

module.exports = { command, resourceName, index, error };
