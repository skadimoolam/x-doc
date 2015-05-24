#!/usr/bin/env node

var
	argv = processArgv(process.argv),
	doc = require('./all.json').modules;

if (argv[0]) {
	for (var i in doc) {
		var data = doc[i];

		if (data.name == argv[0] && !argv[1]) {
			log(data);
		} else if (data.name == argv[0] && argv[1]) {
			for (var j in data.methods) {
				var method = data.methods[j];

				if (method.name == argv[1]) {
					log(method);
				}
			}
		}
	}
} else {
	console.log('Specify what you are searching for as the second Parameter, like shown below:\n x-doc http\n x-doc fs.readFileSync');
}

/**
@function log
@description Logs releavent data from the Source
@param {string} input
*/
function log(input) {
	var stippedDesc = stripTags(input.desc);
	console.log('\n' + 'Text Raw: ' + input.textRaw);
	console.log('Name: ' + input.name + '\n');
	console.log('Description:\n' + stippedDesc);
}


/**
@function stripTags
@description Removes all HTML tags using RegEx
@param {string} input
@return {string}
*/
function stripTags(input) {
    var output = input;
    output = output.replace(/<code>/ig, '[');
    output = output.replace(/<\/code>/ig, ']');
    output = output.replace(/<a href=\\?"[^>]+>/ig, '');
    output = output.replace(/(<\/?\w{1,}>)/ig, '');
    return output;
}


/**
@function processArgv
@description Takes a value like 'fs.readFileSync' and converts it into ['fs', 'readFileSync']
@param {array} argv
@return {array}
*/
function processArgv(argv) {
	var argv = argv.slice(2);

	if (argv[0] == undefined) {
		return argv;
	} else {
		argv = argv[0].split('.');

		if (argv[1]) {
			argv[1] = argv[1].replace('()', '');
		}
		return argv;
	}
}

// 'https://iojs.org/dist/v2.0.2/doc/api/'
// 'https://nodejs.org/docs/v0.10.0/api/'
