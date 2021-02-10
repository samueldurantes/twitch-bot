const { Listener } = require('../structures')

module.exports = class Message extends Listener {
  constructor (client) {
    super(client)
  }

  async onMessage (channel, tags, message, self) {
    try {
      const prefix = process.env.PREFIX

      if (self || !message.startsWith(prefix)) return
      const parameters = message.slice(prefix.length).split(/ +/)
      const commandName = parameters.shift().toLowerCase()

      const command = this.client.commands.find((command) => command.name.toLowerCase() === commandName || (command.aliases && command.aliases.includes(commandName)))
      const customCommand = await this.client.database.commands.findOne({ _id: commandName })

      if (command) {
        command.execute(channel, message, parameters)
      } else if (customCommand) {
        this.client.say(channel, customCommand.message)
      }
    } catch (error) {
      console.log(error)
    }
  }
}
