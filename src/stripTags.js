/**
@module stripTags
@description Removes all HTML tags using RegEx
@param {string} input
@return {string}
*/
(function() {
'use strict';


module.exports = function (input) {
    var output = input;
    output = output.replace(/<a href=\\?"[^>]+>/ig, '');  // replaces all ancher tags with ''
    output = output.replace(/(<\/?\w{1,}>)/ig, '');       // replaces all html tags with ''
		output = output.replace(/\&\#\d\d\;/ig,'\'');         // replaces &#39; with '
    return output;
}

}());
// output = output.replace(/<code>/ig, '[');
// output = output.replace(/<\/code>/ig, ']');
