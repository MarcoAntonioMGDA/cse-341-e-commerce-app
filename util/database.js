const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect(
        'mongodb+srv://MarAntBQ:twG4DxEpNKuZ8Ooq@cluster0.wjhk8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
        )
        .then(client => {
            console.log('Connected Mijin!');
            callback(client);
        })
        .catch(err => {
            console.log(err);
        });
};

module.exports = mongoConnect;

