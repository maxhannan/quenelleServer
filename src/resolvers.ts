import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    me: () => {
      return "Hello World!";
    },
  },
};
