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

      if (!command) return

      command.execute(channel, message, parameters)
    } catch (error) {
      console.log(error)
    }
  }
}
