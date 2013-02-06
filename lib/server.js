/*
 * Basic_HTTP_Server
 * https://github.com/owzzz/Node_Basic_HTTP_Server
 *
 * Copyright (c) 2013 owzzz
 * Licensed under the MIT license.
 */

(function() {

  'use strict';

  //Require http Module
  var http = require('http');

  //Create New Server
	http.createServer(function (req, res) {
		//Create Header passing an object with content type
	  res.writeHead(200, {'Content-Type': 'application/json'});

	  res.end('Hello World');
	  //Listen on Port 1337
	}).listen(1337, '127.0.0.1');

	// Log out message in terminal/command line
	console.log('Server running at http://127.0.0.1:1337/');

}());
