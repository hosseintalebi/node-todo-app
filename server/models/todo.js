const mongoose = require('mongoose')

// Todo model
const Todo = mongoose.model('Todos', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false,
  },
  completedAt: {
    type: Number,
    default: null,
  }
})

module.exports = {
  Todo,
}
