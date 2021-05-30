import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class AddCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute({ 
        ano, 
        marca, 
        modelo, 
        opcionais, 
        placa, 
        quilometragem 
    }: ICreateCarDTO) {
        if(!ano || !marca || !modelo || !placa || !quilometragem) {
            throw new AppError("Preencha todos os campos");
        }

        const carAlreadyExist = await this.carsRepository.findByPlate(placa) 

        if(carAlreadyExist) {
            throw new AppError("Carro com esta placa ja cadastrado", 403);
        }

        const car = await this.carsRepository.create({
            ano, 
            marca, 
            modelo, 
            opcionais, 
            placa, 
            quilometragem
        })

        return car;
    }

}

export {AddCarUseCase}