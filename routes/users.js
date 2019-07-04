var express = require('express');
var router = express.Router();
var redis = require('redis');

var redisClient = redis.createClient({host : 'hackaton-redis1.northeurope.cloudapp.azure.com', port : 15218});
console.log("host : 'hackaton-redis1.northeurope.cloudapp.azure.com', port : 15218");
redisClient.auth('redis1234',function(err,reply) {
    console.log(reply);
});
redisClient.on('ready',function() {
    console.log("Redis is ready");
});
router.post('/updateGuards', function (req, res, next) {
    // redisClient.json_set("guards",'.', JSON.stringify(req.body), (err) => {
    //     console.log(err);
    // });
    let body = req.body
    body.lastUpdateTime = new Date()
    redisClient.set("guards", JSON.stringify(body), (err) => {
        if (err) {
            console.log('redis set', err)
        }
        console.log("update worked")
        res.send('success')
    })


});
/* GET users listing. */
router.get('/guards', function (req, res, next) {
    redisClient.get("guards",
        (err, reply) => {
            res.json(JSON.parse(reply))
        });
});
module.exports = router;