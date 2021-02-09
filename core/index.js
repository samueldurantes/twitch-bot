const { Client } = require('tmi.js')
const { File } = require('@retromada/toolbox')

class Twitch extends Client {
  constructor () {
    super({
      options: { debug: true },
      connection: { reconnect: true },
      identity: {
        username: 'bot-name',
        password: 'oauth:your-token'
      },
      channels: ['your-channel']
    })

    this.initializeListeners()
  }

  initializeListeners (directory = 'core/listeners') {
    File.requireDirectory(directory, (Listener, event) => {
      const listener = new Listener(this)
      this.on(event, (...v) => listener['on' + listener.constructor.name](...v))
    }, console.error)
  }
}

module.exports = Twitch
