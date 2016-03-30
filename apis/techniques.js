// Library service
// activities API resources
// author @sauliuz

var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var marked = require('marked');

var request = require('request');



function techniqueRoutes() {
  var techniqueRouter = new express.Router();
  techniqueRouter.use(cors());
  techniqueRouter.use(bodyParser());

  
  // get all techniques
  techniqueRouter.get('/', function(req, res) {

    // http request options
    var requestOptions = {
      url: 'https://api.github.com/repos/SEMAT-Exists-Org/content-techniques/contents/',
      headers: {
        'User-Agent': 'SEMAT-Exists'
      }
    };

    // techniques are stored in GitHub as markdown files
    // we query the 'content-techniques' repository in order to

    request(requestOptions, function (error, response, body) {

        if (error){

          res.status(400);
          res.json({
            error: 'github access error'
          });

        }

        // success scenario
        if (!error && response.statusCode == 200) {

          // we have array of JSON elements
          var responseJSON = [];
          var fullResponse = JSON.parse(body);

          fullResponse.forEach(function(file){
              
              if (file.name != 'LICENSE' && file.name != 'README.md' && file.name != 'technique-template.md'){
                var fileData = {};
                fileData.name = file.name;
                fileData.gitid = file.sha;
                fileData.size = file.size;

                responseJSON.push(fileData);
              }
          });

          // response
          res.json(responseJSON);

        
        } else if (!error && response.statusCode != 200){

          // response
          res.status(500);
          res.json({
            error: 'github error',
            message: body
          });
        }
    });

  });


  // send back specific technique by sha hash
  techniqueRouter.get('/:sha', function(req, res) {
      
    // approach to list technique by sha
    // 1. get the details of activity by sha number
    // 2. send back content in base64 encoded format

    var requestOptions = {
      url: 'https://api.github.com/repos/SEMAT-Exists-Org/content-techniques/git/blobs/' +req.params.sha,
      headers: {
        'User-Agent': 'SEMAT-Exists'
      }
    };


    request(requestOptions, function (error, response, body) {

        if (error){

          res.status(400);
          res.json({
            error: 'github access error'
          });

        }

        // success scenario
        if (!error && response.statusCode == 200) {

          var responseJSON = {};
          var fullResponse = JSON.parse(body);

          responseJSON.sha = fullResponse.sha;
          responseJSON.content = fullResponse.content;

          // // first we base64 decode the file content
          // var fileContent = new Buffer(fullResponse.content, 'base64').toString('utf8');

          // response
          res.json(responseJSON);

        
        } else if (!error && response.statusCode != 200){

          // response
          res.status(500);
          res.json({
            error: 'github error',
            message: body
          });
        }
    });

  });


  // create new activity
  techniqueRouter.post('/', function(req, res) {
    
    // response
    res.json({
      techniques: 'techniques post to create new technique',
      message: 'this resource is currentlly not implemented'
    });
  });  

  // end of activities resources
  // any new resources shuld go here

  return techniqueRouter;
};


module.exports = techniqueRoutes;
