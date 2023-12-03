var express = require('express');
var router = express.Router();
const request = require('request');
router.get('/', async (req, res) => {
    request({url:'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example', encoding: null }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            const data = Buffer.from(body);
            res.type("png")
            res.send(data)
        }
    });
})
module.exports = router;
