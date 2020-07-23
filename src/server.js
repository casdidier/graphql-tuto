var { graphql, buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String,
    pizza: String,
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

// The root provides a resolver function for each API endpoint
var api = {
  pizza: () => {
    return 'commande une pizza';
  },
};

// Run the GraphQL query '{ hello }' and print out the response
graphql(schema, '{ hello }', root).then((response) => {
  console.log(response);
});

// Run the GraphQL query '{ pizza }' and print out the response
graphql(schema, '{ pizza }', api).then((response) => {
  console.log(response);
});