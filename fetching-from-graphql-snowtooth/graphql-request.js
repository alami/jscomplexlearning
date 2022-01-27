import { request } from "graphql-request";

const query = `
  query {
    Trail(id: "grandma") {
      name
      status
    }
  }
`;

request("https://snowtooth.moonhighway.com/graphql", query)
    .then(console.log)
    .catch(console.error);