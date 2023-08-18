//helps convert graphql strings into expected format
const gql = require("graphql-tag");

export const typeDefs = gql`
  type Query {
    tracksForHome: [Track!]!
  }
  "A track is a group of Modules that teaches about a spcific topic"
  type Track {
    id: ID!
    "the track's title"
    title: String!
    "the track's main author"
    author: Author!
    "the track's main illistration"
    thumbnail: String
    "aproximate time to complete"
    length: Int
    "number of modules"
    modulesCount: Int
  }
  "Author of a complete Track"
  type Author {
    id: ID!
    "Authors full name"
    name: String!
    "url for author photo"
    photo: String
  }
`;
