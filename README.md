### Library Service

Library service is responsible for interacting with GitHub based SEMAT content and documentation.

Library exposes set of API resources to allow SEMAT client applications to consume and tag GitHub content.

Library service is NodeJS application. In order to run this service on your own host, you have to have NodeJS (and npm) installed.

After clonning the git repository, got the the directory and run npm command to install required dependencies

	npm install
	
After npm finishes installing all dependencies, you can start the service with 

	node app
	
By default application will be listening on port 3000

by [@sauliuz](https://github.com/sauliuz) 
