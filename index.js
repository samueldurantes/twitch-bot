const client = new (require('./core/index.js'))()

client.connect().catch(console.error)
