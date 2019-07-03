var express = require('express');
var router = express.Router();
var redis = require('redis');

var redisClient = redis.createClient({host : '52.169.229.122', port : 15268});
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
    redisClient.set("guards", JSON.stringify(req.body)).then(
        console.log("update worked")
    );
});
/* GET users listing. */
router.get('/guards', function (req, res, next) {
    redisClient.get("guards",
        (err, reply) => {
            res.json(JSON.parse(reply))
        });
});
module.exports = router;