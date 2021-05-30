import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./AuthenticateUseCase";

class AuthenticateController {
    async handle(request: Request, response: Response) {
        const { email, password } = request.body;

        const authenticateUseCase = container.resolve(AuthenticateUserUseCase)

        const user = await authenticateUseCase.execute({email, password})

        return response.json({
            auth: "Ok",
            user: user.email
        });
    }
}

export { AuthenticateController }