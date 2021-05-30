import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";
import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>

    constructor() {
        this.repository = getRepository(User);
      }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository
            .createQueryBuilder("user")
            .where("user.email = :email", { email })
            .select(["user.email", "user.password", "user.id"])
            .getOne();

        if(!user) {
            throw new AppError("Usuario ou senha incorretos");
        }

        return user;
    }

}

export { UsersRepository }