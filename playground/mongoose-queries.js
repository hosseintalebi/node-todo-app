const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')

const id = '59b428ab021c225cf4c297fe'

if (!ObjectID.isValid(id)) {
  return console.log('ID not valid')
}
// find many documents
Todo.find({
  _id: id
}).then((todos) => {
  console.log(`find -> Todos: ${todos}`)
})

// find the first matched document
Todo.findOne({
  _id: id
}).then((todo) => {
  console.log(`findOne -> Todo: ${todo}`)
})

// find a document by id
Todo.findById(id).then((todo) => {
  if (!todo) {
    return console.log('id not found')
  }
  console.log(`findById -> Todo: ${todo}`)
}).catch((err) => console.log(err))
