const express = require('express')
require('express-async-errors')
require('dotenv').config()
const cookieParser = require('cookie-parser')
const connectDB = require('./db/connectDB')
const path = require('path')
// middleware Imports
const customError = require('./middleware/customError')
const authMiddleware = require('./middleware/authMiddleware')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')

const app = express()
// middleware
app.use(express.json())
app.use(cookieParser())
app.use(helmet())
app.use(mongoSanitize())
// Routers
const userRouter = require('./routes/userRouter')
const vaultRouter = require('./routes/vaultRouter')

app.use(express.static(path.resolve(__dirname, '../client/dist')))

app.use('/api/v1/auth', userRouter)
app.use('/api/v1/vault', authMiddleware, vaultRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'))
})

app.use(customError)

const PORT = process.env.PORT || 3000
const start = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => {
      console.log('server is listening')
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
