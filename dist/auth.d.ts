import { NextFunction, Request, Response } from 'express';
import { IAuthMiddleware } from './interfaces';
declare class AuthMiddleware implements IAuthMiddleware {
    requireAuth(req: Request, res: Response, next: NextFunction): void;
}
export { AuthMiddleware };
