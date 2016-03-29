// Library service
// activities API resources
// author @sauliuz


var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

function activityRoutes() {
  var activityRouter = new express.Router();
  activityRouter.use(cors());
  activityRouter.use(bodyParser());

  
  // get all activities. default limit by 25? 
  activityRouter.get('/', function(req, res) {
      
    // response
    res.json({
      activities: 'activities get all activities'
    });
  });


  // get a specific activity by id? 
  // as we are using GitHub to store activities, 
  // might use name to get the specific activity.

  activityRouter.get('/:id', function(req, res) {
      
    // response
    res.json({
      activities: 'get a specific activity by id: ' + req.params.id
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