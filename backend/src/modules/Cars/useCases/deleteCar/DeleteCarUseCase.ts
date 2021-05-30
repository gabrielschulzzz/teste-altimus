import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";

@injectable()
class DeleteCarUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute(id: string) {
        await this.carsRepository.delete(id)   
    }
}

export { DeleteCarUseCase }