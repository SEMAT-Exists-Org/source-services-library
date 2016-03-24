// activity API resource
// @TODO completly no tests cases...

var request = require('request');



function loadActivityResources(app) {

    // Supported paths only:
    // GET /activity
    // POST /activity

    // @TODO - add async module - sequential requests
    app.get('/activity', function(req, res) {
        
            res.set({
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Max-Age':'1728000',
                'Content-Type': 'application/json'
            });
            res.status(400);
            var errorMsg = '{"activity":"get activity"}';
            res.send(errorMsg);      

    });

    // @TODO - add async module - sequential requests
    app.post('/activity', function(req, res) {
        
            res.set({
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Max-Age':'1728000',
                'Content-Type': 'application/json'
            });
            res.status(400);
            var errorMsg = '{"activity":"post activity"}';
            res.send(errorMsg);      

    });

};

// public
module.exports = loadActivityResources;
