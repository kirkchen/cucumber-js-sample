var jsdom = require("jsdom");

var doc = jsdom.jsdom("<html><body></body></html>");
var window = doc.parentWindow;
var $ = global.$ = global.jQuery = require('jquery')(window);
