const MongoRepository = require('../MongoRepository.js')
const Command = require('../schemas/CommandSchema.js')

class CommandRepository extends MongoRepository {
  constructor () {
    super(Command)
  }
}

module.exports = CommandRepository
