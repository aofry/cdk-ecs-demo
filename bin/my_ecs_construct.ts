#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { MyEcsConstructStack } from '../lib/my_ecs_construct-stack';

const envEU = {
    account: process.env.CDK_DEFAULT_ACCOUNT, 
    region: 'eu-central-1'
}

const app = new cdk.App();
new MyEcsConstructStack(app, 'MyEcsConstructStack', { env: envEU });
