const _ = require('lodash')
const express = require('express')
const bodyParser = require('body-parser')
const { ObjectID } = require('mongodb')

// Local imports
require('./config/config')
const { mongoose } = require('./db/mongoose')
const { Todo } = require('./models/todo')
const { User } = require('./models/user')

const app = express()

const port = process.env.PORT || 3000
// set middleware for express
app.use(bodyParser.json())

app.post('/todos', (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  })
  todo.save().then((doc) => {
    res.send(doc)
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({
      todos,
    })
  }, (err) => {
    res.status(400).send(err)
  })
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  if (!ObjectID.isValid(id)) {
    res.status(404).send()
  }
  Todo.findById(id).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((err) => res.status(400).send())
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id
    if (!ObjectID.isValid(id)) {
      return res.status(404).send()
    }
    Todo.findByIdAndRemove(id).then((todo) => {
      if(!todo) {
        return res.status(404).send()
      }
      res.send({todo})
    }).catch((err) => res.status(400).send())
})

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const body = _.pick(req.body, ['text', 'completed'])

  if (!ObjectID.isValid(id)) {
    return res.status(404).send()
  }

  if (_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime()
  } else if (_.isBoolean(body.completed) && body.completed === false){
    body.completed = false
    body.completedAt = null
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if (!todo) {
      return res.status(404).send()
    }
    res.send({todo})
  }).catch((err) => res.status(400).send())
})
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})

module.exports = {
  app,
}
