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
```
