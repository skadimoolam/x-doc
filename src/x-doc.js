'use strict';

var
	processArgv = require('./processArgv.js'),
	log = require('./output.js'),
	argv = processArgv(process.argv.slice(2)),
	doc = require('./all.json').modules;

if (argv) {
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
	log('Specify what you are searching for as the second Parameter, like shown below:\n> x-doc http\n> x-doc fs.readFileSync', false, 'red');
}

// 'https://iojs.org/dist/v2.0.2/doc/api/'
// 'https://nodejs.org/docs/v0.10.0/api/'
