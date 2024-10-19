const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const cors=require('cors')
require('dotenv').config()
require('./Models/db.js')
const rout=require('./Routes/routes.js')


const PORT=process.env.PORT || 8080

app.use(bodyParser.json())
app.use(cors())


app.use('/plan',rout)


app.listen(PORT,()=>{
  console.log('Server is Running')
})