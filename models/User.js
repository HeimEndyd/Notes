const { Schema, model } = require('mongoose')

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  notes: [{ type: Schema.Types.ObjectId, ref: 'Note' }],
})

module.exports = model('User', schema)
