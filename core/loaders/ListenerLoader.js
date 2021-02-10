const { File } = require('@retromada/toolbox')

const { Loader } = require('../structures')

class ListenerLoader extends Loader {
  constructor (client) {
    super(client)
  }

  async load () {
    try {
      await this.initalizeLoaders()
    } catch (error) {
      console.log(error)
    }
  }

  initalizeLoaders (directory = 'core/listeners') {
    return File.requireDirectory(directory, (Listener, event) => {
      const listener = new Listener(this.client)
      this.client.on(event, (...v) => listener['on' + listener.constructor.name](...v))
    }, console.error)
  }
}

module.exports = ListenerLoader
