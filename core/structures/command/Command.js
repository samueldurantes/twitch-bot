module.exports = class Command {
  constructor (options = {}, client) {
    this.name = options.name
    this.aliases = options.aliases

    this.client = client
  }
}
