import connectMongo from 'utils/connectMongo'
import Test from 'models/testModel'

export default async function addTest(req, res) {
  try {
    await connectMongo()
    console.log('CONNECTED TO MONGO')

    const products = await Test.find()
    res.send(products)
  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}