import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/UserService";
import { AuthService } from "../services/AuthService";
import { Token } from "../security/Token";

export class AuthenticationMiddleware {

  constructor(
    private userService: UserService = new UserService(),
    private authService: AuthService = new AuthService(),
    private tokenService: Token = new Token()
  ) { }

  public async authenticate(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userService.validateUser(req.body);
      const token = await this.tokenService.generateToken(req.body, '1d');
      const auth = await this.authService.create(user);

      Object.assign(auth, { name: user.name, email: user.email, token: token });

      res.status(200).json(auth);
    } catch (error) {
      next(error);
    }
  }

  public async signOut(req: Request, res: Response, next: NextFunction) {
    try {
      const auth = await this.authService.delete(req.body.id);
      res.status(200).json(auth);
    } catch (error) {
      next(error);
    }
  }

}
