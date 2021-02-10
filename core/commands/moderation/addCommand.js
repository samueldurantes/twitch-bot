const { Command } = require('../../structures/command')

module.exports = class AddCommand extends Command {
  constructor (client) {
    super({
      name: 'addcommand',
      aliases: 'addcom'
    }, client)
  }

  async execute (channel, message, parameters) {
    await this.client.database.commands.add({
      _id: parameters[0],
      value: parameters[1]
    })

    this.client.say(channel, 'Command created successfully')
  }
}
