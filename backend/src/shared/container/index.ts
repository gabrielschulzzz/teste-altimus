import { CarsRepository } from "@modules/Cars/infra/repositories/CarsRepository";
import { ICarsRepository } from "@modules/Cars/repositories/ICarsRepository";
import { UsersRepository } from "@modules/Users/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICarsRepository>(
    "CarsRepository",
    CarsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
)