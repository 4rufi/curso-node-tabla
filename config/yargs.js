const { argv } = require('yargs')
  .options({
    b: {
      alias: 'base',
      demandOption: true,
      describe: 'base for multiplication table',
      type: 'number',
    },
  })
  .options({
    l: {
      alias: 'limit',
      demandOption: true,
      describe: 'limit for multiplication table',
      type: 'number',
    },
  })
  .options({
    s: {
      alias: 'show',
      demandOption: false,
      default: false,
      describe: 'show table in console',
      type: 'boolean',
    },
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw 'La base debe ser un numero';
    }
    if (isNaN(argv.l)) {
      throw 'El limite debe ser un numero';
    }
    return true;
  });

module.exports = argv;
