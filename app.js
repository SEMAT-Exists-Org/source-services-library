
// SEMAT
// Library service.
// Exposes set of API resources to be consumed by client applications
// mobile / web apps.

// The main goal for this service is to interact with the SEMAT content and documentation hosted
// in GitHub organization and provide client applications well defined set of APIs
// for presenting and linking the content.


// dependencies
var express = require('express');

// config
var config = {
    port: process.env.FH_PORT|| 8001,
    host: process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
};

// main entry point
initApp();

// methods
function initApp () {

    var app = express();

    loadAPIResources(app);
    configureExpress(app);
    startApp(app);

    module.exports = app;
}

function configureExpress (app) {
    app.disable('x-powered-by');
    app.use(express.compress());

    // for any not supported resource paths
    // generic 404 error response
    app.all("*", function(req, res) {
        res.status(400);
        // Headers
        res.set({
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Max-Age':'1728000',
            'Content-Type':'application/json'
        });
        
        var errorMsg = '{"error":"bad request"}';
        res.send(errorMsg);
    });

    // support for cross domain scripting CORS
    app.options('*', function(req, res) {
        // Headers
        res.set({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Max-Age': '1728000',
            'Content-Type': 'text/plain'
        });
        res.status(200);
        res.send();
    });

}

// Library service API resources
function loadAPIResources (app) {
    require('./controllers/activity.api.resource')(app);
    require('./controllers/technique.api.resource')(app);
    require('./controllers/library.api.resource')(app);    
}

// starting nodejs service
function startApp (app) {

    app.listen(config.port, function (err) {
        if (err) {
            console.error('App didn\'t start:');
            console.error(err.stack);
            process.exit(1);
        }
        console.log('SEMAT library service has started on port ' + config.port);
    });
}