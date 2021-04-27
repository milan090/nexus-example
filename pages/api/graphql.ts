import { ApolloServer } from "apollo-server-micro";
import { createContext } from "schema/context";
import { schema } from "schema/index";

const server = new ApolloServer({
  schema,
  context: createContext,
  tracing: process.env.NODE_ENV === "development",
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default server.createHandler({
  path: "/api/graphql",
});
