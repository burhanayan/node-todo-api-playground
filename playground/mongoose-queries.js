const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// var id = "590d3fb4e1f716173448820c";

// if(!ObjectID.isValid(id)) {
//     console.log('Id is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo By id', todo);
// }).catch((e) => console.log(e));

// User.findById
var id = "590d127f33a75f3e9cce9d623";
User.findById(id).then((user) => {
    if (!user) {
        return console.log('user not found');
    }
    console.log('User by id', user);
}).catch((e) => console.log(e));
