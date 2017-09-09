const { MongoClient, ObjectID } = require('mongodb')

// const obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }

  console.log('Connected to MongoDB server')

  // db.collection('Todos').find({completed: false}).toArray().then((docs) => {
  //   console.log('Todos')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Una to fetch todos', err)
  // })

  // db.collection('Todos').find({completed: false}).count().then((count) => {
  //   console.log('Todos count: ', count)
  // }, (err) => {
  //   console.log('Una to fetch todos', err)
  // })

  db.collection('Users').find({name: 'Hoss'}).toArray().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2))
  }, (err) => {
    console.log('Cannot fetch user')
  })

  // db.close()
})
