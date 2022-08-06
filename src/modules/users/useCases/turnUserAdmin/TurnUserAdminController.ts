import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params
      const userFound = this.turnUserAdminUseCase.execute({user_id})
      return response.status(200).send(userFound)
    } catch (error) {
      return response.status(404).send({error: error.message})
    }
  }
}

export { TurnUserAdminController };
