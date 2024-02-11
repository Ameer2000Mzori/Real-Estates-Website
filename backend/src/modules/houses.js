import mongoose, { Schema } from 'mongoose'

const housesSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  description: { type: String, required: true },
})

const houses = mongoose.model('houses', housesSchema)

export { houses }
