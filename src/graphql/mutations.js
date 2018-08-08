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

export const UPDATE_POST = gql`
mutation updatePost($id: ID!, $title: String!, $body: String! ) {
  updatePost(
    where: {id: $id}, 
    data: {status: PUBLISHED, title: $title, body: $body}
  ) {
    title
    body
    id
  }
}
`;

export const TOGGLE_POST = gql`
mutation togglePost($check: Boolean, $id: ID) {
  updatePost(
    where: {id: $id},
    data: {check: $check} 
  ) {
    check
  }
}
` 