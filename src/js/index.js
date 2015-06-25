require("../scss/index.scss");

var React = require('react');
var Main = require('./components/Main');

// prebuild
//var lunr = require('./lunr')
//var commits = require('./commits');
//var idx = lunr.Index.load(commits)

var element = document.getElementById('content');
React.render(React.createElement(Main, {}), element);

document.body.classList.remove('loading');
