import { ApolloServer } from 'apollo-server';
import * as typeDefs from './schema.graphql';
import resolvers from './resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
} as any);

server.listen({ port: 3000 }).then(({ url }) => {
  console.log(`Live ${url}`);
});
