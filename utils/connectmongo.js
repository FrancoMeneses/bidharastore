import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect(DB_HOST)

export default connectMongo