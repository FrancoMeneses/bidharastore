import mongoose from 'mongoose'

const connectMongo = async () => mongoose.connect('mongodb+srv://person:pozolomio@clustertest2.hazpdn5.mongodb.net/test')

export default connectMongo