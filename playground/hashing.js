const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')

const data = {
  id: 10,
}

const token = jwt.sign(data, 'mySecrete')
console.log(token)

const decoded = jwt.verify(token, 'mySecrete')
console.log('decoded: ', decoded)
// const message = 'I am user number 3'
//
// const hash = SHA256(message).toString()
//
// console.log(`Message: ${message}`)
// console.log(`Hash: ${hash}`)
//
// const data = {
//   id: 4,
// }
//
// const token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'someSecrete').toString()
// }
//
// const resultHash = SHA256(JSON.stringify(data) + 'someSecrete').toString()
//
// if (resultHash === token.hash) {
//   console.log('data was not changes')
// } else {
//   console.log('data was changed, do not trust')
// }
