const mongoose = require('mongoose')

const CommandRepository = require('./repositories/CommandRepository.js')

module.exports = class Mongo {
  constructor () {}

  connect (mongoURI = process.env.MONGO_URI) {
    return mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
      .then(() => {
        this.commands = new CommandRepository()
      })
  }
}
