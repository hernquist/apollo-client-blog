import gql from 'graphql-tag';

export const POSTS_QUERY = gql`
  query allPosts($skip: Int) {
    posts (orderBy: createdAt_DESC, first: 6, skip: $skip) {
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
      check
    }
    isEditMode @client
  }
`;

// export const IS_EDIT_MODE = gql`
// {
//   isEditMode @client
// }
// `;
