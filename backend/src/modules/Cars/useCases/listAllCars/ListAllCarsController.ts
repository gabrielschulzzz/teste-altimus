import { AppError } from "@shared/errors/AppError";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllCarsUseCase } from "./ListAllCarsUseCase";

class ListAllCarsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listAllCarsUseCase = container.resolve(ListAllCarsUseCase)

        const cars = await listAllCarsUseCase.execute()

        return response.status(200).json(cars)
    }
}

export { ListAllCarsController }