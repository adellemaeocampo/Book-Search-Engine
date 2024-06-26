const typeDefs = `
type Query {
    me: User
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int 
    savedBooks; [Book]
}

type Book {
    bookId: ID
    authors: [String]
    description: String
    title: String
    image: String
    link: String

}

type Auth {
    token: ID!
    user: User
}

type Query {
    user(userid: ID!): User
    users: [User]!
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBooks(bookData: SaveBookInput!): User, 
    removeBook(bookId: ID): User 
}


// type SaveBookInput {
//     bookId: ID!
//     authors: [String]
//     description: String
//     title: String
//     image: String
//     link: String
// }
`;

module.exports = typeDefs;