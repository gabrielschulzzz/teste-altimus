import { inject, injectable } from "tsyringe";
import { compare } from 'bcryptjs'
import { AppError } from "@shared/errors/AppError";
import { IUsersRepository } from "@modules/Users/repositories/IUsersRepository";
import { User } from "@modules/Users/infra/typeorm/entities/User";

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<User> {
    if (!email || !password) {
      throw new AppError("Insira um email e senha")
    }

    const user = await this.usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError("Email ou senha incorretos")
    }

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) {
      throw new AppError("User or password incorrect")
    }

    return user
  }
}

export { AuthenticateUserUseCase };
