"use strict";

var argv = require("yargs").options({
  'b': {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: "Es la base de la sumatoria"
  },
  'l': {
    alias: 'listar',
    type: 'boolean',
    "default": false,
    describe: "Es la opción para imprimir la lista"
  }
}).check(function (argv, options) {
  if (isNaN(argv.b)) {
    throw "La base tiene que ser un número";
  } else {
    return true;
  }
}).argv;

module.exports = argv;