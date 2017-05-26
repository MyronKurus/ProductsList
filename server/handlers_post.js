var md5 = require('md5');
var conf = require('./config');
var mysql = require('mysql');
var url = require('url');

/* DB config */
var DB = mysql.createConnection(conf.DB);

/* API methods*/
function update_user(req,res){
    var path = url.parse(req.url).pathname.split('/');
    var id = DB.escape(Number(path[3]));
    var pass = md5(req.body.passOld);
    var update = ' email='+DB.escape(req.body.email);
    var resp = {};
    resp.email = req.body.email;
    resp.id = id;
     
    
    if (req.body.firstname){
        update += ',firstname='+DB.escape(req.body.firstname);
        resp.firstname = req.body.firstname;
    }
    if (req.body.lastname){
        update += ',lastname='+DB.escape(req.body.lastname);
        resp.lastname = req.body.lastname;
    }
    if (req.body.pass0){
        update += ',password='+DB.escape(md5(req.body.pass0));
    }
    console.log(update);
    if (id) {
        DB.query('SELECT * FROM `users` WHERE `id` = ' + id, function (err, rows) {
            if (err) {
                return res.json({
                    error: err
                });
            } else {
                if (rows.length > 0) {
                    if(rows[0].password == pass){
                       console.log('pass ok')
                        DB.query('UPDATE users SET '+ update +' WHERE `id` = ' + id,function(err,row){
                            if (rows.length > 0) {
                                return res.json(resp);
                            } else {
                                return res.json({
                                    error: 'Something wrong'
                                });
                            }
                        });
                    } else {
                        return res.json({
                            error: 'Wrong password'
                        });
                    }
                } else {
                    return res.json({
                        error: 'No user with ' + id + ' ID'
                    });
                }
            }
        });
    } else {
        return res.json({
            error: 'No user ID provided'
        });
    }
}

function add_prod(req,res){
    var name = DB.escape(req.body.name);
    var price = DB.escape(req.body.price);
    var descr = DB.escape(req.body.descr);
    DB.query('INSERT INTO `product` (`id`, `name`, `price`, `descr`) VALUES (NULL,'+name+','+ price + ','+descr+')',function(err,row){
        if (err) {
            return res.json({
                error: err
            });
        } else {
            return res.json(row);
        }
    })
}

exports.user = update_user;
exports.products = add_prod;