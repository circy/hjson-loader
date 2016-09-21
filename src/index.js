/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Sebastian Kreissl @circyde
*/
var Hjson = require('hjson');

module.exports = function(content) {
    var jsonObject = Hjson.parse(content);
    return "module.exports = " + Hjson.stringify(jsonObject) + ";";
};