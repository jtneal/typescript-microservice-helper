import { IErrorResponse } from './interfaces';
declare class Controller {
    protected getStatus(response: IErrorResponse, status: number): number;
}
export { Controller };
