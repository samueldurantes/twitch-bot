const { model, Schema } = require('mongoose')

module.exports = model('Command', new Schema({
  _id: String,
  value: String
}, {
  timestamps: {
    createdAt: true,
    updatedAt: true
  }
}))
