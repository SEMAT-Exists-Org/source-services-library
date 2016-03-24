// library API resources
// @TODO completly no tests cases...


function loadLibraryResources(app) {

    // Supported paths only:
    // GET /library

    // @TODO - add async module - sequential requests
    app.get('/library', function(req, res) {
        
            res.set({
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Max-Age':'1728000',
                'Content-Type': 'application/json'
            });
            res.status(400);
            var errorMsg = '{"activity":"get library"}';
            res.send(errorMsg);      

    });

};

// public
module.exports = loadLibraryResources;