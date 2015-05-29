/**
@module log
@description Logs releavent data from the Source
@param {string} input
*/

(function(exports) {
'use strict';


var
  stripTags = require('./stripTags.js'),
  chalk = require('chalk');


/**
@module singleLine
@description Logs 'input' with a specified 'color'
@param {string} input
@param {string} color
*/
exports.singleLine = function (input, color) {
    console.log(chalk[color](input));
}


/**
@module multiLine
@description Logs releavent data from the Source
@param {string} input
*/
exports.multiLine = function (input) {
  var stippedDesc = stripTags(input.desc);

  console.log('\n' + 'Name_raw: ' + chalk.magenta(input.textRaw));
	console.log('Name: ' + chalk.magenta(input.name) + '\n');
	console.log('Description:\n' + chalk.cyan(stippedDesc));
}


/**
@module logMethods
@description Logs a list of all the methods precent in a module
@param {string} input
*/
exports.logMethods = function (input) {
  var list = input.methods;

  console.log(chalk.green('\nList of all the Methods in this Module'));

  for (var i in list) {
    console.log(' - ' + chalk.magenta(list[i].name));
  }
}

}(exports));
