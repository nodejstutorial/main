
// Retrieve
var MongoClient = require('mongodb').MongoClient;

var uri = process.env.MONGODB_DEVELOPMENT_URI;
console.log(uri);

// Connect to the db
MongoClient.connect(uri, function (err, db) {
    if (err) {
        throw err;
    } else {
        console.log("successfully connected to the database");
        
        // Insert document in MongoDb Collection
				var document = {title:'insert document in mongodb',url:'http://runnable.com/UW3ef2Tkq498AABE/insert-a-record-in-mongodb-using-mongodb-native-for-node-js',category:'node.js'}

				db.collection('bookmarks').insert(document, function(err,records){
						//if (err) throw err;
						console.log('inserted record id: ' + records[0]._id);
				  });
    }
    db.close();
});


