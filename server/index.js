/**
 * Created by Innokentii on 07.10.2016.
 */
/*Modules*/
var express = require('express');
var serv = express();
var path = require('path');
var url = require('url');

/*private api part*/
var handle = {};
handle.GET = require("./handlers_get");
handle.POST = require("./handlers_post");
handle.DELETE = require("./handlers_del");

/*public api part*/
var handle_pub = {};
handle_pub.GET = require("./handlers_get_public");
handle_pub.POST = require("./handlers_post_public");
handle_pub.DELETE = require("./handlers_del_public");

var conf = require('./config');
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

serv.use(bodyParser.json()); // for parsing application/json
serv.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


/* Routing */
/* static files */
serv.use('/node_modules', express.static(path.join(__dirname + '/../node_modules')));
serv.use('/js', express.static(path.join(__dirname + '/../client/js')));
serv.use('/css', express.static(path.join(__dirname + '/../client/css')));
serv.use('/partials', express.static(path.join(__dirname + '/../client/partials')));
serv.use('/fonts', express.static(path.join(__dirname + '/../client/fonts')));

/* Api requests*/
serv.use('/api/', function(req,res,next){
    var path = url.parse(req.url).pathname.split('/');
    if (path[1] == 'private') {
        if (req.headers.token) {// here must be function for check token,but i don't have enough time.
            if (typeof handle[req.method][path[2]] === 'function') {
                handle[req.method][path[2]](req, res);
            } else {
                res.status(404).send('404 Not Found');
            }
        } else {
            res.status(401).send('401 Unauthorized');
        }
    } else {
        if (typeof handle_pub[req.method][path[1]] === 'function') {
            handle_pub[req.method][path[1]](req,res);
        } else {
            res.status(404).send('404 Not Found');
        }
    }
});
/* Frontend */
serv.all('*', function(req, res, next) {
    res.sendFile(path.resolve('../client/index.html'));
});


/* start serv */
serv.listen(conf.port, function () {
    console.log('Listening on port ' + conf.port);
});