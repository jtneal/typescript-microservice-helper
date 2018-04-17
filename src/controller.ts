import { injectable } from 'inversify';

import { IErrorResponse } from './interfaces';

@injectable()
class Controller {
    protected getStatus(response: IErrorResponse, status: number): number {
        return response.Error ? response.Error.statusCode : status;
    }
}

export { Controller };
