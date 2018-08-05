import gql from 'graphql-tag';

export const ADD_POST = gql`
mutation addPost($title: String!, $body: String!) {
  createPost(data: {
    status: PUBLISHED
    title: $title
    body: $body
  })
  {
    title
    body
    id
  }
}
`;