import { nexusPrisma } from "nexus-plugin-prisma";
import { makeSchema, mutationType, objectType, queryType } from "nexus";
import path from "path";
import * as Mutation from "./Mutation";
import * as Query from "./Query";

export const schema = makeSchema({
  // Make sure to add types in this (incase of opts error, do this)
  types: { ...Query, ...Mutation },
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
  ],
  outputs: {
    schema: path.join(process.cwd(), "generated/schema.graphql"),
    typegen: path.join(process.cwd(), "generated/nexus-typegen.ts"),
  },
  contextType: {
    module: path.join(process.cwd(), "schema/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
      // {
      //   module: require.resolve("./context"),
      //   alias: "Context",
      // },
    ],
  },
});

export default schema;
