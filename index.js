const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
	# Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

	# This "Book" type defines the queryable fields: 'title' and 'author'.
	type Book {
		title: String
		author: String
	}

	# The "Query" type is special: it lists all of the available queries that
	# clients can execute, along with the return type for each. In this
	# case, the "books" query returns an array of zero or more Books (defined above).
	type Query {
		books: [Book]
	}
`;

const books = [
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
	},
	{
		title: "Wuthering Heights",
		author: "Emily Brontë",
	},
];

const resolvers = {
    Query: {
        books: () => books,
    }
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});