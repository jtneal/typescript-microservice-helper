import { DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
declare class Service {
    protected client: DocumentClient;
    protected database: DynamoDB;
    constructor();
}
export { Service };
