import { AWSError } from 'aws-sdk';
import { NextFunction, Request, Response } from 'express';
export interface IAuthMiddleware {
    requireAuth(req: Request, res: Response, next: NextFunction): void;
}
export interface IControllerDelete {
    delete(req: Request, res: Response): void;
}
export interface IControllerGet {
    get(req: Request, res: Response): void;
}
export interface IControllerPost {
    post(req: Request, res: Response): void;
}
export interface IControllerPut {
    put(req: Request, res: Response): void;
}
export interface IErrorResponse {
    Error?: AWSError;
}
