import {  gql } from 'apollo-server-express';

export const typeDefs = gql `
    type Demand {
        id: ID!
        name: String!
        cliente: Client!
        deadline: String
    }
    extend type Query {
        demands: [Demand]!
    }
`;

export const resolvers = {
    Query: {
        demands: () => [],
    },
};