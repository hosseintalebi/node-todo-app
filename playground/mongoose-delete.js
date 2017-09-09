const { ObjectID } = require('mongodb')
const { mongoose } = require('../server/db/mongoose')
const { Todo } = require('../server/models/todo')

// remove everything
// Todo.remove({}).then((result) => {
//   console.log(result)
// })

Todo.findOneAndRemove({text: 'First test todo'}).then((todo) => {
  console.log(`Removed todo: ${todo}`)
})

Todo.findByIdAndRemove('59b45ddbda7b2e6fccff0eb8').then((todo) => {
  console.log(`Removed todo: ${todo}`)
})
