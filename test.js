
var path = require('path');

var express = require('express'),
    Mincer = require("mincer"),
    hbs = require('express-hbs');

var app = express();

app.engine('hbs', hbs.express3({

}));

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, "views"));

var environment = new Mincer.Environment();

environment.appendPath(path.join(__dirname, 'assets'));

var assetPaths = {};

environment.eachLogicalPath([function () { return true; }], function (logicalPath) {
    // Find asset and get digest path
    var environRoot = "/assets/theme",
        origPath = [environRoot, logicalPath].join('/'),
        asset = environment.findAsset(logicalPath),
        digestPath = origPath;

    if (asset && asset.digestPath) {
        digestPath = [environRoot, asset.digestPath].join('/');
    }

    assetPaths[origPath] = digestPath;
});

hbs.registerHelper('assetPath', function (path) {
    return assetPaths[path];
});

app.use("/assets/theme", Mincer.createServer(environment));

app.get("/", function (req, res) {
    res.render('test');
});

app.listen(4000, function (err) {
    if (err) { throw err; }
    
    console.log("Express started");
});