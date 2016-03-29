### Library Service

Library service is responsible for interacting with GitHub based SEMAT content and documentation.

Library exposes set of API resources to allow SEMAT client applications to consume and tag GitHub content.

Library service is NodeJS application. In order to run this service on your own host, you have to have [NodeJS (and npm) installed](https://nodejs.org/en/).

Next, get [Grunt](http://gruntjs.com/getting-started) installed on your dev mashine if you dont have it.

	npm install -g grunt-cli
	
Next, clone the the git source code of this repository. After clonning the git repository, go to the the directory created by git and run npm command to install required dependencies

	npm install
	
After npm finishes installing all dependencies, you can start the service with 

	grunt serve
	
By default application will be listening on localhost port 8001

by [@sauliuz](https://github.com/sauliuz)