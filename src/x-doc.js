(function() {
'use strict';

var
	log = require('./output.js'),
	arg = require('minimist')(process.argv.slice(2)),
	argv = require('./processArgv.js')(arg._),
	fs = require('fs'),
	doc;

function dbExist() {
	var exist = fs.existsSync('./all.json');

	if (exist) {
		doc = require('./all.json').modules;
	} else {
		doc = require('./backup.json').modules;
		search();
	}
}

dbExist();

function search() {
	if (argv) {
	  repeat(doc, function (data) {
	    if (data.name == argv[0] && !argv[1]) {
				if (arg['m-only']) log.logMethods(data)
				else {
					log.multiLine(data);
					if (arg.m) {	log.logMethods(data)	};
				};
			} else if (data.name == argv[0] && argv[1]) {
	      repeat(data.methods, function (method) {
	        if (method.name == argv[1]) {
	          log.multiLine(method);
	        }
	      });
	    }
	  });
	} else {
		log.singleLine('Specify what you are searching for as the second Parameter, like shown below:\n\n> x-doc http\n> x-doc fs.readFileSync', 'red');
	}
}


function repeat(arr, callback) {
  for (var i in arr) {
    callback(arr[i]);
  };
};

}());
