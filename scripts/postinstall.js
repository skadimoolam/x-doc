#!/usr/bin/env node


(function() {
'use strict';

var
  log = require('../src/output.js'),
  fs = require('fs'),
  request = require('request'),
  inquirer = require("inquirer");


inquirer.prompt({
  type: 'list',
  name: 'whichFlavor',
  message: 'Which flavor of Node do you use?',
  choices: ['NodeJS', 'IOjs']
}, function( answers ) {
  var link = getVersion(answers.whichFlavor);
  getDoc(link);
});

function getVersion(whichFlavor) {
  var version = process.version;

  whichFlavor = whichFlavor == 'NodeJS' ? 'https://nodejs.org/docs/' + version + '/api/all.json' : 'https://iojs.org/dist/' + version + '/doc/api/all.json';

  return whichFlavor;
}

function getDoc(link) {
  request(link, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      fs.writeFileSync('./src/all.json', body);

      log.singleLine('\nx-doc is ready, get started by typing\n\n> x-doc http\n> x-doc fs.readFileSync', 'green');
    } else {
      log.singleLine('\nOops something went wrong, please reinstall x-doc', 'red');
    }
  })
}

}());
