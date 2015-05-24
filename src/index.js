#!/usr/bin/env node

var
	argv = processArgv(process.argv),
	data = require('./all.json');

for (var i in data.modules) {
	var newData = data.modules[i];

	if (newData.name == argv[0] && !argv[1]) {
		log(newData);
	} else if (newData.name == argv[0] && argv[1]) {
		for (var j in newData.methods) {
			var method = newData.methods[j];

			if (method.name == argv[1]) {
				log(method);
			}
		}
	}

}

function log(input) {
	var stippedDesc = stripTags(input.desc);
	console.log('Text Raw: ' + input.textRaw);
	console.log('Name: ' + input.name + '\n');
	console.log('Description:\n' + stippedDesc);
}

function stripTags(input) {
    var output = input;
    output = output.replace(/<code>/ig, '[');
    output = output.replace(/<\/code>/ig, ']');
    output = output.replace(/<a href=\\?"[^>]+>/ig, '');
    output = output.replace(/(<\/?\w{1,}>)/ig, '');
    return output;
}

function processArgv(argv) {
	var argv = argv.slice(2);
	argv = argv[0].split('.');

	if (argv[1]) {
		argv[1] = argv[1].replace('()', '');
	}

	return argv;
}

// 'https://iojs.org/dist/v2.0.2/doc/api/'
// 'https://nodejs.org/docs/v0.10.0/api/'
