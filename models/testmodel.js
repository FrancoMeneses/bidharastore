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
  bestSeller: {
    type: Boolean,
    required: true
  },
  stock: {
    type: String,
    required: true,
    trim: true
  },
  priority: {
    type: Number,
    required: true
  },
  category: { 
    type: String,
    required: true,
    trim: true
  },
  presentations: [
    {
      name: String,
      price: Number
    }
  ],
  image: {
    url: String
  }
})

const Test7 = models.Test7 || model('Test7', testNewSchema, 'TestBidhara')

export default Test7