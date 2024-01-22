import { makeExecutableSchema } from '@graphql-tools/schema';
import schema from "./schema";
import resolver from "./resolver";

const executableSchema = makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolver,
});

export default executableSchema;