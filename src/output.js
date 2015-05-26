/**
@module log
@description Logs releavent data from the Source
@param {string} input
*/
'use strict';


var
  stripTags = require('./stripTags.js'),
  colors = require('colors/safe');

/**
@module singleLine
@description Logs 'input' with a specified 'color'
@param {string} input
@param {string} color
*/
exports.singleLine = function (input, color) {
    console.log(colors[color](input));
}


/**
@module multiLine
@description Logs releavent data from the Source
@param {string} input
*/
exports.multiLine = function (input) {
  var stippedDesc = stripTags(input.desc);

  console.log('\n' + 'Name_raw: ' + colors.magenta(input.textRaw));
	console.log('Name: ' + colors.magenta(input.name) + '\n');
	console.log('Description:\n' + colors.cyan(stippedDesc));
}


/**
@module logMethods
@description Logs a list of all the methods precent in a module
@param {string} input
*/
exports.logMethods = function (input) {
  var list = input.methods;

  console.log(colors.green('\nList of all the Methods in this Module'));

  for (var i in list) {
    console.log(' - ' + colors.magenta(list[i].name));
  }
}
