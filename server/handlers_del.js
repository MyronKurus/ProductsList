var md5 = require('md5');
var conf = require('./config');
var mysql = require('mysql');
var url = require('url');

/* DB config */
var DB = mysql.createConnection(conf.DB);


/*DELETE API api/private/products */
function delete_product(req,res){
    var path = url.parse(req.url).pathname.split('/');
    
    DB.query('DELETE FROM `product` WHERE `product`.`id` in(' +req.body.id+')', function (err, rows) {
        if (err){
            return res.json({
                error: err
            });
        } else {
            return res.json({
                data: 'Products deleted successfully'
            });
        }
    });
}

exports.products = delete_product;