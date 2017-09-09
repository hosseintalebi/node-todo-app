const { MongoClient, ObjectID } = require('mongodb')

// const obj = new ObjectID();
// console.log(obj)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server')
  }

  console.log('Connected to MongoDB server')

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((results) => {
  //   console.log(results)
  // })

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((results) => {
  //   console.log(results)
  // })

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((doc) => {
  //   console.log(JSON.stringify(doc, undefined, 2))
  // })

  db.collection('Users').deleteMany({name: 'Hoss'})
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID("59af848507a56f2bf8f0df1b")
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2))
  })

  // db.close()
})
