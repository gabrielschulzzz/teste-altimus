import { IUpdateCarDTO } from "@modules/Cars/dtos/IUpdateCarDTO";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class EditCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({
        ano, 
        id, 
        marca, 
        modelo, 
        opcionais, 
        placa, 
        quilometragem
        }: IUpdateCarDTO) {
            if(!ano || !marca || !modelo || !placa || !quilometragem) {
                throw new AppError("Preencha todos os campos", 403);
            }

            await this.carsRepository.update({
                quilometragem, 
                placa, 
                opcionais, 
                modelo, 
                marca, 
                id,
                ano
            })
        }

    }

export {EditCarUseCase}