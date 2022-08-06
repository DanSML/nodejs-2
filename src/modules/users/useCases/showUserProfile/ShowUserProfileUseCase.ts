import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const userFound = this.usersRepository.findById(user_id)
    userFound.updated_at = new Date()
    if (!userFound) {
      throw new Error("Mensagem do erro")
    }

    return userFound
  }
}

export { ShowUserProfileUseCase };
