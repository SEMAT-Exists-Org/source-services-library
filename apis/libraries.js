// Library service
// libraries API resources
// author @sauliuz


var util = require('util');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');


// API resources

function libraryRoutes() {
  var libraryRouter = new express.Router();
  libraryRouter.use(cors());
  libraryRouter.use(bodyParser());


  
  // get all libraries. default limit by 25? 
  libraryRouter.get('/', function(req, res) {



    // github.user.getAll({
    //   // optional:
    //   // headers: {
    //   //     "cookie": "blahblah"
    //   // },
    //   user: "SEMAT-Exists"
    // }, function(err, res) {
    
    //   console.log(JSON.stringify(res));
    
    //   // api response
    //   res.json({
    //     libraries: 'libraries get all libraries'
    //   }); 


    // });

    
    
    // github.repos.getFromUser({
    //   // mandatory:
    //   // user: "SEMAT-Exists",
    //   // repo: "content-techniques"
    //   user: "SEMAT-Exists"
    
    // }, function(err, res) {
      
    //   if (err) {
    //     console.log(JSON.stringify(res));
      
    //     // api response
    //     res.json({
    //       libraries: 'libraries get all libraries'
    //     }); 

    //   }

    //   if (res) {
    //     console.log(JSON.stringify(res));

    //     // api response
    //     res.json({
    //       libraries: 'libraries get all libraries'
    //     }); 
    //   }


    // });


    // github.repos.getFromOrg({
    //   // mandatory:
    //   org: "SEMAT-Exists-Org"
    //   //repo: "content-techniques"

    // }, function(error, response) {
      
    //   // console
    //   console.log(JSON.stringify(error));
    //   console.log(JSON.stringify(response));

    //   // api response
    //   res.json({
    //     libraries: 'libraries get all libraries'
    //   });

    // });

    // github.repos.getFromOrg({
    //   // mandatory:
    //   org: "SEMAT-Exists-Org"
    //   //repo: "content-techniques"

    // }, function(error, response) {
      
    //   // console
    //   console.log(JSON.stringify(error));
    //   console.log(JSON.stringify(response));

    //   // api response
    //   res.json({
    //     libraries: 'libraries get all libraries'
    //   });
    
    // });

  });


  // get a specific library by id? 
  // as we are using GitHub to store libraries, 
  // might use name to get the specific library.

  libraryRouter.get('/:id', function(req, res) {
      
    // response
    res.json({
      libraries: 'get a specific library by id: ' + req.params.id
    });
  });


  // create new activity
  libraryRouter.get('/:id/activities', function(req, res) {
    
    // response
    res.json({
      libraries: 'get a specific library by id:',
      message: 'this resource is currentlly not implemented'
    });
  });  

  // end of activities resources
  // any new resources shuld go here

  return libraryRouter;
};


module.exports = libraryRoutes;