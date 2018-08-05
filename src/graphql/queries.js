import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
  query allPosts {
    postz {
      id
      title
      body
      createdAt
    }
  }
`;