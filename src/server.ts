import { ApolloServer, gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    hello: String!
  }
`; // Para busca da dadsos

const server = new ApolloServer({
  typeDefs,
  resolvers: { // São os controllers
    Query: {
      hello: () => {
        return "Olá para todos!";
      },
    },
  },
}); // Criar Server

server.listen().then(({ url }) => {
  console.info(" Server APOLLO " + url);
});
