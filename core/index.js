const { Client } = require('tmi.js')

const Loaders = require('./loaders')

class Main extends Client {
  constructor () {
    super({
      options: { debug: true },
      connection: { reconnect: true },
      identity: {
        username: process.env.BOT_USERNAME,
        password: process.env.PASSWORD_OAUTH
      },
      channels: [process.env.CHANNEL]
    })

    this.initializeLoaders()
  }

  async initializeLoaders () {
    for (const name in Loaders) {
      await new Loaders[name](this).load()
    }
  }
}

module.exports = Main
