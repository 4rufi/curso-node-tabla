const { makeFile } = require('./helpers/makeFile');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

const { base, limit, show } = argv;

makeFile(base, limit, show)
  .then((message) => console.log(colors.green(`${message} Creado`)))
  .catch(console.log(colors.red()));
