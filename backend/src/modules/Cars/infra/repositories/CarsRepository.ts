import { ICreateCarDTO } from "@modules/Cars/dtos/ICreateCarDTO";
import { IUpdateCarDTO } from "@modules/Cars/dtos/IUpdateCarDTO";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { getRepository, Repository } from "typeorm";
import { Car } from "../typeorm/entities/Car";

class CarsRepository implements ICarsRepository {
    private repository: Repository<Car>;

    constructor() {
        this.repository = getRepository(Car)
    }

    async findById(id: string): Promise<Car | undefined> {
        const car = await this.repository.findOne(id)
        return car
    }

    async findByPlate(placa: string): Promise<Car | undefined> {
        const car = await this.repository.findOne({ placa })

        return car;
    }

    async findAll(): Promise<Car[]> {
        const cars = await this.repository.find()

        return cars;

    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async update({ id, ano,quilometragem, placa, opcionais, modelo, marca}: IUpdateCarDTO): Promise<void> {
        await this.repository
        .createQueryBuilder()
        .update(Car)
        .set({ano,quilometragem, placa, opcionais, modelo, marca})
        .where("id = :id", { id })
      .execute();
    }

    async create({ano, marca, modelo, opcionais, placa, quilometragem}: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            ano,
            marca,
            modelo,
            placa,
            quilometragem,
            opcionais
        })

        await this.repository.save(car)

        return car;
    }

}

export { CarsRepository }