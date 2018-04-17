"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = require("aws-sdk");
const inversify_1 = require("inversify");
let Service = class Service {
    constructor() {
        aws_sdk_1.config.update({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            endpoint: process.env.AWS_DYNAMODB_ENDPOINT,
            region: process.env.AWS_REGION,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        });
        this.client = new aws_sdk_1.DynamoDB.DocumentClient();
        this.database = new aws_sdk_1.DynamoDB();
    }
};
Service = __decorate([
    inversify_1.injectable(),
    __metadata("design:paramtypes", [])
], Service);
exports.Service = Service;
//# sourceMappingURL=service.js.map