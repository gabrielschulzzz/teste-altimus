import { AuthenticateController } from '@modules/Users/useCases/authenticate/AuthenticateController';
import { Router } from 'express'

const authRoutes = Router();

const authenticateController = new AuthenticateController()

authRoutes.post('/', authenticateController.handle)

export { authRoutes }