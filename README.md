# Canto Analytics API
Custom SQL queries for some metrics

## Local Development
### Env
```
nvm install 16.16
nvm use 16.16
yarn install

# create .env file similar to env.example
```

### Test Serverless Function Locally
```
serverless offline
```

### Deploy to AWS Lambda
```
# need aws cli configured w cloud-formation access
serverless deploy
# OR
serverles deploy --aws-profile profileName
```

### AWS CLI IAM access
- AmazonAPIGatewayAdministrator
- AmazonS3FullAccess
- AWSCloudFormationFullAccess
- AWSLambda_FullAccess
- CloudWatchLogsFullAccess
- IAMFullAccess


### Note
- delete cloudformation attempt if you see this error `is in ROLLBACK_COMPLETE state and can not be updated`
