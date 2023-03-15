const express = require('express')
require('express-async-errors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const connectDB = require('./db/connectDB')
// middleware Imports
const customError = require('./middleware/customError')
const CustomAPIError = require('./errors/customError')
const authMiddleware = require('./middleware/authMiddleware')

const app = express()
// middleware
app.use(express.json())
app.use(cookieParser())
// Routers
const userRouter = require('./routes/userRouter')
const vaultRouter = require('./routes/vaultRouter')

app.get('/', async (req, res) => {
  throw new CustomAPIError('Bye Bye')
  //   res.status(200).send('Welcome route')
})
app.use('/api/v1/auth', userRouter)
app.use('/api/v1/vault', authMiddleware, vaultRouter)

app.use(customError)

const start = async () => {
  try {
    await connectDB()
    app.listen(3000, () => {
      console.log('server is listening')
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
