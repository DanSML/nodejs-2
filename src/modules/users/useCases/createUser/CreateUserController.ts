import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { name, email } = request.body
      const createdUser = this.createUserUseCase.execute({name, email})
  
      return response.status(201).json(createdUser).send()
    } catch (error) {
      return response.status(400).send({ error: error.message })
    }
  }
}

export { CreateUserController };
