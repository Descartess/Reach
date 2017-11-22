import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { graphiqlExpress, graphqlExpress } from 'graphql-server-express';
import Schema from '../data/schema';

const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: executableSchema,
  context: {},
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(4000, () => console.log('running'));
