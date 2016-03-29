// Library service
// activities API resources
// author @sauliuz

var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var request = require('request');



function activityRoutes() {
  var activityRouter = new express.Router();
  activityRouter.use(cors());
  activityRouter.use(bodyParser());

  
  // get all activities. default limit by 25? 
  activityRouter.get('/', function(req, res) {

    // approach to list all activities
    // 1. get the list of all the files in the repositary
    // https://api.github.com/repos/SEMAT-Exists-Org/content-activities/contents/
    // 2. From JSON, remove the README and License file groups. Send back the remaining files list
    // 3. No default limit, add query param if needed.


    var requestOptions = {
      url: 'https://api.github.com/repos/SEMAT-Exists-Org/content-activities/contents/',
      headers: {
        'User-Agent': 'SEMAT-Exists'
      }
    };


    // activities are stored in GitHub as markdown files
    // we query the 'content-activities' repository in order to

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
              
              if (file.name != 'LICENSE' && file.name != 'README.md'){
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


  // send back specific activity by sha hash
  activityRouter.get('/:sha', function(req, res) {
      
    // approach to list activity by sha
    // 1. get the details of activity by sha number
    // 2. convert base64 to markdown and markdown to html
    // 3. send html content back to mobile client


    var requestOptions = {
      url: 'https://api.github.com/repos/SEMAT-Exists-Org/content-activities/git/blobs/' +req.params.sha,
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

          var base64Decoded = new Buffer(fullResponse.content, 'base64').toString('ascii');
          //responseJSON.content = fullResponse.content;
          responseJSON.content = base64Decoded;
          

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
  activityRouter.post('/', function(req, res) {
    
    // response
    res.json({
      activities: 'activities post to create new activity',
      message: 'this resource is currentlly not implemented'
    });
  });  

  // end of activities resources
  // any new resources shuld go here

  return activityRouter;
};


module.exports = activityRoutes;