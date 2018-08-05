import gql from 'graphql-tag';

export const ADD_POST = gql`
mutation addPost {
  createPost(data: {
    status:PUBLISHED
    title: "mutation added"
    body: "here a mutation from graphCMS"
  })
  {
    title
    body
    id
  }
}
`;