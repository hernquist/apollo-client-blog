import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

export const POST_QUERY = gql`
  query singlePost($id: ID!) {
    post(where: { id: $id}) {
      id
      title
      body
    }
  }
`;

export const IS_EDIT_MODE = gql`
{
  isEditMode @client
}
`;
