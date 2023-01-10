import { ApolloServer } from '@apollo/server';
import { IResolvers } from '@graphql-tools/utils/typings/Interfaces';
import { resolvers } from './resolvers';
import typeDefs from './type-defs';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';

const NODE_ENV = process.env.NODE_ENV || 'production';


const server = new ApolloServer({
  typeDefs,
  resolvers,
  // subscriptions: {},
  // context: {},
});

export const graphqlHandler = startServerAndCreateLambdaHandler(server);
