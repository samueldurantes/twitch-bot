const { File } = require('@retromada/toolbox')

const { Loader } = require('../structures')

module.exports = class CommandLoader extends Loader {
  constructor (client) {
    super(client)

    this.client.commands = []
  }

  async load () {
    try {
      await this.initializeCommands()
    } catch (error) {
      console.log(error)
    }
  }

  initializeCommands (directory = 'core/commands') {
    return File.requireDirectory(directory, (Command) => {
      this.client.commands.push(new Command(this.client))
    }, console.error)
  }
}
