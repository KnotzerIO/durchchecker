import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { resolve } from 'node:path'
import { apiRouter } from './routes/index.js'

const app = express()

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        ...helmet.contentSecurityPolicy.getDefaultDirectives(),
        'connect-src': ["'self'", process.env['VITE_STRAPI_URL'] ?? ''],
      },
    },
  }),
)
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use('/api', apiRouter)

if (process.env['NODE_ENV'] === 'production') {
  app.use(express.static(resolve('dist/public')))
  app.use((_req, res) => {
    res.sendFile(resolve('dist/public/index.html'))
  })
}

export default app
