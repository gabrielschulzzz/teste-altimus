import { ICreateCarDTO } from "../dtos/ICreateCarDTO";
import { IUpdateCarDTO } from "../dtos/IUpdateCarDTO";
import { Car } from "../infra/typeorm/entities/Car";

interface ICarsRepository {
    findAll(): Promise<Car[]>;
    findByPlate(placa: string): Promise<Car | undefined>;
    delete(id: string): Promise<void>;
    update(data: IUpdateCarDTO): Promise<void>;
    create(data: ICreateCarDTO): Promise<Car>;
}

export { ICarsRepository }