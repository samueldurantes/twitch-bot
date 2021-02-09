const { client } = require('tmi.js')
const { Listener } = require('../structures')

module.exports = class Message extends Listener {
  constructor (client) {
    super(client)
  }

  onMessage (channel, tags, message, self) {
    if (self) return

    if (message.toLowerCase() === '!hello') {
      this.client.say(channel, `@${tags.username}, heya!`)
    }
  }
}
