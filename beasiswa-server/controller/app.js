var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var path = require('path');
var cors = require("cors")
var cor = cors();
app.use(cor);
app.use(express.static(path.join(__dirname, "../public")));
var appbeasiswa = require('../model/beasiswa.js');

app.get('/api/category/:nim/appbeasiswa', function (req, res) {
    var nim = req.params.nim;
    appbeasiswa.getAppBeasiswa(nim, function (err, result) {
        if (!err) {
            res.send(result);
        } else {
            console.log(err);
            res.status(500).send(err);
        }
    });
});
module.exports = app