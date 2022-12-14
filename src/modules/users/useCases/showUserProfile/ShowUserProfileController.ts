import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params
      const userFound = this.showUserProfileUseCase.execute({user_id})
  
      return response.status(201).send(userFound)
    } catch (error) {
      return response.status(404).send({ error: error.message })
    }
  }
}

export { ShowUserProfileController };
