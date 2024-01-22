import express, { ErrorRequestHandler} from "express";
import { graphqlHTTP } from 'express-graphql';
import executableSchema from "./graphql";

const app = express();

app.use(express.json());

app.use(
    '/graphql',
    graphqlHTTP({
      schema: executableSchema,
      graphiql: true,
    })
);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    res.status(500).json({ message: err.message });
};

app.use(errorHandler);

export default app;