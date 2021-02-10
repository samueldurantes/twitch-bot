const { Loader } = require('../structures')
const Mongo = require('../database/Mongo.js')

class DatabaseLoader extends Loader {
  constructor (client) {
    super(client)
  }

  async load () {
    try {
      await this.initializeDatabase()
    } catch (error) {
      console.log(error)
    }
  }

  initializeDatabase () {
    this.client.database = new Mongo()
    this.client.database.connect()
      .then(() => console.log('Initalized database'))
      .catch((error) => {
        console.log(error)
        this.client.database = null
      })
  }
}

module.exports = DatabaseLoader
