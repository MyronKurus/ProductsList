var md5 = require('md5');
var conf = require('./config');
var mysql = require('mysql');
var url = require('url');

/* DB config */
var DB = mysql.createConnection(conf.DB);

/* API methods*/

