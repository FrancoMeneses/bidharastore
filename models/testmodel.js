import { Schema, model, models } from 'mongoose'

const testNewSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: { 
    type: String,
    required: true,
    trim: true
  },
  presentations: [String],
  image: {
    url: String
  }
})

const Test2 = models.Test2 || model('Test2', testNewSchema, 'TestBidhara')

export default Test2