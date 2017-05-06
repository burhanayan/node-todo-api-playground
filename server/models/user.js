var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        minlength: 1,
        required: true
    }
});

// var newUser = new User({
//     email: '1burhan.ayan@gmail.com'
// });

// newUser.save().then((doc) => {
//     console.log('User is saved', doc);
// }, (e) => {
//     console.log('Unable to save user', e);
// });

module.exports = { User };