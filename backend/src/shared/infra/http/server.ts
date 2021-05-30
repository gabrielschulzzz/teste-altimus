import 'reflect-metadata'
import cors from 'cors'
import express from "express";
import 'express-async-errors'

import '@shared/infra/typeorm'
import '@shared/container'

import { router } from './routes'
import { errorHandling } from '@shared/infra/http/middlewares/errorHandling'

const app = express()
app.use(cors())
app.use(express.json());
app.use(router)
app.use(errorHandling);
  


app.listen(3333, () => console.log('Server is running 🚀'))
