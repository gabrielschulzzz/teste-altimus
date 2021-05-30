import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditCarUseCase } from "./EditCarUseCase";

class EditCarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const { 
            ano, 
            marca, 
            modelo, 
            opcionais, 
            placa, 
            quilometragem 
        } = request.body;

        const editCarUseCase = container.resolve(EditCarUseCase)

        await editCarUseCase.execute({
            ano, 
            id, 
            marca, 
            modelo, 
            opcionais, 
            placa, 
            quilometragem 
        })

        return response.json({})
    }
}

export { EditCarController }