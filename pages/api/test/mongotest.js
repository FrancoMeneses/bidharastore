import connectMongo from 'utils/connectMongo'
import Test2 from 'models/testModel'

export default async function addTest(req, res) {
  try {
    console.log(req.body)
    await connectMongo()
    if(req.body.length === 1){
      const response = await Test2.create(req.body)
      res.json(response)
    } else{
      const response = await Test2.insertMany(req.body)
      res.json(response)
    }

  } catch (error) {
    console.log(error)
    res.json({ error })
  }
}