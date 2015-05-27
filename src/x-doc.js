'use strict';

var
	processArgv = require('./processArgv.js'),
	log = require('./output.js'),
	arg = require('minimist')(process.argv.slice(2)),
	argv = processArgv(arg._),
	doc = require('./all.json').modules;

console.log(arg.m);

if (argv) {
	for (var i in doc) {
		var data = doc[i];

		if (data.name == argv[0] && !argv[1]) {
			log.multiLine(data);
			if (arg.m) {	log.logMethods(data)	};
		} else if (data.name == argv[0] && argv[1]) {
			for (var j in data.methods) {
				var method = data.methods[j];

				if (method.name == argv[1]) {
					log.multiLine(method);
				}
			}
		}
	}
} else {
	log.singleLine('Specify what you are searching for as the second Parameter, like shown below:\n\n> x-doc http\n> x-doc fs.readFileSync', 'red');
}
