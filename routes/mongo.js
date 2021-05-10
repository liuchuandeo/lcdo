var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://root:Liuchuan520@cluster0.uw3ll.mongodb.net/grocery?retryWrites=true&w=majority";
    MongoClient.connect(url,function(err, db) {
        if (err) throw err;
        var dbo = db.db("grocery");
        dbo.collection("user"). find({}).toArray(function(err, result) { // 返回集合中所有数据
            if (err) throw err;
            console.log(result);
            res.render('mongo', { title: 'MongoDB1',result:result});
            db.close();
        });
    });
});

module.exports = router;
