/**
@module log
@description Logs releavent data from the Source
@param {string} input
*/
'use strict';


var
stripTags = require('./stripTags.js'),
colors = require('colors/safe');

module.exports = function (input, multiLine, color) {

  var multiLine = true || multiLine;

  if (multiLine) {
    var stippedDesc = stripTags(input.desc);
    console.log('\n' + 'Name_raw: ' + colors.magenta(input.textRaw));
  	console.log('Name: ' + colors.magenta(input.name) + '\n');
  	console.log('Description:\n' + colors.cyan(stippedDesc));
  } else {
    console.log(colors[color](input));
  }
}
