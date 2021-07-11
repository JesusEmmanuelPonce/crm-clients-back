const { gql } = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID
        name: String
        lastName: String
        email: String
        createdAt: String
    }

    input UserInput {
        name: String!
        lastName: String!
        email: String!
        password: String!
    }

    type Query {
        obtenerCurso: String
    }

    type Mutation {
        addUser(input: UserInput): User 
    }
`;

module.exports = typeDefs;