import { Schema, model, models } from 'mongoose'

const productSchema = new Schema({
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

const Products = models.Products || model('Products', productSchema, 'BidharaProducts')

export default Products