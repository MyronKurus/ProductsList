/**
 * Created by Innokentii on 10.10.2016.
 */
/*
* API methods:
 /api/private/login POST:email,pass
 /api/private/sign POST:email,pass
 /api/private/user/:id GET
 /api/private/products?order=X&orderby=Y&qty=Z GET
 /api/private/products/:id DELETE
* */

/* sql DB config */
exports.DB = {
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cr_test'
};
exports.port = '8888';