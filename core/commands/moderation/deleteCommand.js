const { Command } = require('../../structures/command')

module.exports = class DeleteCommand extends Command {
  constructor (client) {
    super({
      name: 'deletecommand',
      aliases: 'delcommand'
    }, client)
  }

  async execute (channel, message, parameters) {
    await this.client.database.commands.remove({ _id: parameters[0] })

    this.client.say(channel, 'Command deleted successfully')
  }
}
