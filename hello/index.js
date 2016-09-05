/**
 * Created by Daniel Castañeda on 04/09/2016.
 */
'use strict'

var http = require('http');

var server = http.createServer(function(req, res) {

    home(req,res);

});
server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");

function home(req, res) {

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write("<!DOCTYPE \"html\">");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>Hello World NodeJS</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h2>Hello World NodeJS!</h2>");
    res.write("</body>");
    res.write("</html>");
    res.end();

}

