import React, { Component } from 'react';
import PostForm from './PostForm';
import { Mutation } from 'react-apollo';
import { UPDATE_POST } from '../graphql/mutations';

export default class UpdatePost extends Component {
  render() {
    const { post } = this.props;
    return (
      <Mutation mutation={UPDATE_POST}>
        {updatePost => (
          <PostForm post={post} onSubmit={updatePost} />
        )}
      </Mutation>
    )
  }
}
