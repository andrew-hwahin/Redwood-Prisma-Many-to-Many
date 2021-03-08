export const schema = gql`
  type Post {
    id: Int!
    title: String!
    tags: [Tag]!
  }

  type Query {
    posts: [Post!]!
    post(id: Int!): Post
  }

  input CreatePostInput {
    title: String!
  }

  input UpdatePostInput {
    title: String
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post!
    updatePost(id: Int!, input: UpdatePostInput!): Post!
    deletePost(id: Int!): Post!
  }
`
