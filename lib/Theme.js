
var path = require('path');

var _ = require('lodash'),
	DasheeTheme = require('dashee-core').Theme.Base;

function DefaultDasheeTheme() {
	// Call the base theme
	DasheeTheme.apply(this, arguments);
}

_.extend(DefaultDasheeTheme.prototype, DasheeTheme.prototype);

_.extend(DefaultDasheeTheme.prototype, {
	assets: [path.join(__dirname, '..', 'assets')],

	viewRoot: path.join(__dirname, '..', 'views')
});

module.exports = DefaultDasheeTheme;