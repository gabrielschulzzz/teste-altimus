import { Request, Response } from "express";
import { container } from "tsyringe";

import { AddCarUseCase } from "./AddCarUseCase";

class AddCarController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { 
            placa, 
            marca, 
            modelo, 
            ano, 
            quilometragem, 
            opcionais
        } = request.body;

        const addCarUseCase = container.resolve(AddCarUseCase)

        const car = await addCarUseCase.execute({
            placa, 
            marca, 
            modelo, 
            ano, 
            quilometragem, 
            opcionais
        })

        return response.json(car)
    }
}

export { AddCarController }