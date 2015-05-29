/**
@module processArgv
@description Takes a value like 'fs.readFileSync' and converts it into ['fs', 'readFileSync']
@param {array} argv
@return {array}
*/

(function() {
'use strict';


module.exports = function (argv) {

	if (argv[0] == undefined) {                // if no argv data is present
		return false;                            // return false
	} else {
		argv = argv[0].split('.');               // split argv[0] where a '.' is placed

		if (argv[1]) {
			argv[1] = argv[1].replace('()', '');   // if the split results in two strings then replace '()' with ''
		}
		return argv;                             // return the two resulting strings
	}
}

}());
