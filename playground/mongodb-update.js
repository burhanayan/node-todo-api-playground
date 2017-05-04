//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('590a684b3a52dd41dee6608d')
    // }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users').findOneAndUpdate(
        { _id: new ObjectID('590a5e0c0ce43f2c14261091') },
        {
            $set: {
                name: 'Burhan Ayan'
            },
            $inc: { age: 1 }
        },

        { returnOriginal: false }).then((result) => {
            console.log(result)
        });

    // db.close();
});