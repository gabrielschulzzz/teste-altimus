import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteCarUseCase } from "./DeleteCarUseCase";

class DeleteCarController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const deleteCarUseCase = container.resolve(DeleteCarUseCase)

        deleteCarUseCase.execute(id)

        return response.json()
    }
}

export { DeleteCarController }