const { MongoClient, ObjectID } = require('mongodb')

// const obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }

  console.log('Connected to MongoDB server')

  // findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: ObjectID("59b0cd2e3a95980e7e94683b")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((results) => {
  //   console.log(results)
  // })

  db.collection('Users').findOneAndUpdate({
    _id: ObjectID('59af86636c25152d26669776')
  }, {
    $set: {
      name: 'Hoss'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  }, (err) => {
    console.log(err)
  })

  // db.close()
})
