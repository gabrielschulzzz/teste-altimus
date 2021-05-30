import { Router } from "express";
import { carRoutes } from "./cars.routes";
import { authRoutes } from './auth.routes'

const router = Router();

router.use("/cars", carRoutes)
router.use('/login', authRoutes)

export { router };
