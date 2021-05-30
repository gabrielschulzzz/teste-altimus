import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { inject, injectable } from "tsyringe";

@injectable()
class ListAllCarsUseCase {
    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) {}

    async execute() {
        const cars = await this.carsRepository.findAll()

        return cars;
    }

}

export { ListAllCarsUseCase }