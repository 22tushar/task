const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const connection = require('./db')
const userRoutes = require('./routes/user')
const authRoutes = require('./routes/auth')

const app = express()

//env configure
dotenv.config()

//connecting database
connection()

//apply middleware
app.use(express.json())
app.use(cors())

//routes
app.use('/api/user', userRoutes)
app.use('/api/auth', authRoutes)

//starting server
const port = process.env.PORT || 8080
app.listen(port, () =>{
    console.log('listening on port ' + port)
})