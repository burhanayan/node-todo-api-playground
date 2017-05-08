const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((res) => {
//     console.log(res);
// });

// Todo.findByIdAndRemove('590fd2ed00938e34ce87a8f9').then((todo) => {
//  console.log(todo);
// });

// Todo.findOneAndRemove({_id: '590fd30d00938e34ce87a901'}).then((res) => {

// });