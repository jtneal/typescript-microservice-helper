import { config, DynamoDB } from 'aws-sdk';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { ConfigurationOptions } from 'aws-sdk/lib/config';
import { injectable } from 'inversify';

@injectable()
class Service {
    protected client: DocumentClient;
    protected database: DynamoDB;

    public constructor() {
        config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
            region: process.env.AWS_REGION,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        } as ConfigurationOptions);

        this.client = new DynamoDB.DocumentClient();
        this.database = new DynamoDB();
    }
}

export { Service };
