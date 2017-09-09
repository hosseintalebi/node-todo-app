const mongoose = require('mongoose')

// tell mongoose which promise lib we're using
// in this case it's js internal promise
mongoose.Promise = global.Promise

// connect to the db
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose,
}
