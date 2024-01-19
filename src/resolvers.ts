import { prisma } from "./db/prisma.js";
import { Resolvers } from "./generated/graphql";

export const resolvers: Resolvers = {
  Query: {
    me: async () => {
      try {
        const data = await prisma.post.findMany();
        console.log(data);
      } catch (error) {
        console.error(error);
      }

      return "Hello World!";
    },
  },
};
