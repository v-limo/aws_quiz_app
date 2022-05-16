import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import apiContentType from './middlewares/apiContentType'
import apiErrorHandler from './middlewares/apiErrorHandler'
import questionRouter from './routers/questions.routes'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 5000)

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}

// Global middleware
app.use(cors(corsOptions))
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/questions', questionRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
