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

// const testNewSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   description: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   category: { 
//     type: String,
//     required: true,
//     trim: true
//   },
//   presentations: [String],
//   image: {
//     url: String
//   }
// })

const Test3 = models.Test3 || model('Test3', testNewSchema, 'TestBidhara')

export default Test3