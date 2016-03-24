// technique API resource
// @TODO completly no tests cases...


function loadTechniqueResources(app) {

    // Supported paths only:
    // GET /technique
    // POST /technique

    // @TODO - add async module - sequential requests
    app.get('/technique', function(req, res) {
        
            res.set({
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Max-Age':'1728000',
                'Content-Type': 'application/json'
            });
            res.status(400);
            var errorMsg = '{"activity":"get technique"}';
            res.send(errorMsg);      

    });

    // @TODO - add async module - sequential requests
    app.post('/technique', function(req, res) {
        
            res.set({
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Max-Age':'1728000',
                'Content-Type': 'application/json'
            });
            res.status(400);
            var errorMsg = '{"activity":"post technique"}';
            res.send(errorMsg);      

    });

};


// public
module.exports = loadTechniqueResources;