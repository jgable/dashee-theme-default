
var path = require('path');

var DasheeTheme = require('dashee-core').Theme.Base;

var DefaultDasheeTheme = DasheeTheme.extend({
	assets: [path.join(__dirname, '..', 'assets')],

	viewRoot: path.join(__dirname, '..', 'views')
});

module.exports = DefaultDasheeTheme;