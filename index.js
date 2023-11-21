// load env contents to process.env by default

require('dotenv').config()

const express = require('express')

const cors = require('cors')

const router = require('./Routes/router')

require('./db/connection')
// create an express application

const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
pfServer.use('/uploads',express.static('./uploads'))
const PORT = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Started At Port ${PORT} and waiting for client request!!`);
})

// http get request  resolving to http://localhost:4000/

pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair started and waiting for client request !!</h1>`)
})


