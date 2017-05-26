var md5 = require('md5');
var conf = require('./config');
var mysql = require('mysql');
var url = require('url');

/* DB config */
var DB = mysql.createConnection(conf.DB);

/* API methods*/
/* api/private/user/:id*/
function user(req,res) {
    var path = url.parse(req.url).pathname.split('/');
    var id = DB.escape(Number(path[3]));
    if (id) {
        DB.query('SELECT * FROM `users` WHERE `id` = ' + id, function (err, rows) {
            if (err) {
                return res.json({
                    error: err
                });
            } else {
                if (rows.length > 0) {
                    return res.json({
                        email: rows[0].email,
                        firstname: rows[0].firstname,
                        id: rows[0].id,
                        lastname: rows[0].lastname
                    });
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


/* /api/private/products?order=X&orderby=Y&qty=Z*/
function get_products(req,res){
    var query_prestring = url.parse(req.url).query;
    var params = {};
    var preparams = {};
    var query;
    var total;
    var resp = {};
    if (query_prestring){
        query = query_prestring.split('&');
        query.forEach(function(value,key){
            var s = value.split('=');
            preparams[s[0]] = s[1];
        });
    }
    
    params.qty = Number(preparams.qty) || 10;
    params.order = preparams.order == 'desc'?'DESC':'ASC';
    params.orderby = preparams.orderby || 'id';
    params.from = Number(preparams.page || 0) * params.qty;
    params.to = params.qty;
    console.log(params.from,params.to);
    DB.query('SELECT * FROM `product`',function(err,rows){
        total = rows.length;
        DB.query('SELECT * FROM `product` ORDER BY ' + params.orderby + ' ' + params.order + ' LIMIT ' + params.from + ',' + params.to, function (err, rows) {
            if (err) {
                return res.json({
                    error: err
                });
            } else {
                if (rows.length > 0) {
                    resp.prods = rows;
                    resp.total = total;
                    resp.q = 'SELECT * FROM `product` ORDER BY ' + params.orderby + ' ' + params.order + ' LIMIT ' + params.from + ',' + params.to;
                    return res.json(resp);
                } else {
                    return res.json({
                        error: 'No products'
                    });
                }
            }
        });
    });
}

exports.user = user;
exports.products = get_products;

