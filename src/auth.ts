import { NextFunction, Request, Response } from 'express';
import { injectable } from 'inversify';

import { IAuthMiddleware } from './interfaces';

@injectable()
class AuthMiddleware implements IAuthMiddleware {
    public requireAuth(req: Request, res: Response, next: NextFunction) {
        if (process.env.AUTH_TOKEN === req.get('Authorization')) {
            next();
        } else {
            res.sendStatus(401);
        }
    }
}

export { AuthMiddleware };
