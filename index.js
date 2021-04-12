require('dotenv').config()
const app = require('./server')
const port = process.env.PORT || 4100

app.listen(port, (req,res)=>{
    console.info(`Running on ${port}`)
  })