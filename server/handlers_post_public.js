var md5 = require('md5');
var conf = require('./config');
var mysql = require('mysql');
var url = require('url');

/* DB config */
var DB = mysql.createConnection(conf.DB);

/* API methods*/
/* /api/private/login :email,pass*/
function login(req,res) {
    var password = md5(req.body.pass);
    DB.query('SELECT * FROM `users` WHERE `email` = ' + DB.escape(req.body.email), function(err, rows, fields) {
        if(!err) {
            if (rows[0]) {
                if (rows[0].password == password) {
                    return res.json({
                        logged: true,
                        token: md5(rows[0].password + rows[0].registered),// ye static and very strong access token
                        user_id: rows[0].id
                    });
                } else {
                    return res.json({
                        logged: false
                    });
                }
            } else {
                return res.json({
                    logged: false
                });
            }
        } else {
            return res.json({
                error: 'something went wrong'
            });
        }
    });
}

/* api/private/sign :email,pass*/
function sign(req,res) {
    var password = md5(req.body.pass);
    DB.query('SELECT * FROM `users` WHERE `email` = ' + DB.escape(req.body.email), function(err, rows, fields) {
        if (err) {
            return res.json({
                error: err
            });
        } else {
            if (rows[0]) {
                return res.json({
                    signed: false,
                    error: 'Can\'t create user with ' + req.body.email + ' email!'
                });
            } else {
                DB.query('INSERT INTO `users` (`email`, `password`) VALUES (' + DB.escape(req.body.email) + ', ' + DB.escape(password) + ')', function (err, row) {
                    if(!err) {
                        DB.query('SELECT * FROM `users` WHERE `email` = ' + DB.escape(req.body.email), function(err, rows, fields) {
                            if(!err) {
                                return res.json({
                                    signed: true,
                                    token: md5(row.password + row.registered),
                                    user_id: rows[0].id
                                });
                            } else {
                                return res.json({
                                    error: 'something went wrong but you are registered. Please update page and login with your data'
                                });
                            }
                        });
                    } else {
                        return res.json({
                            error: 'something went wrong'
                        });
                    }
                });
            }
        }
    });
}
exports.login = login;
exports.sign = sign;