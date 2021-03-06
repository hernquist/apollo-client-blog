import React, { Component } from 'react'
import PostForm from './PostForm';
import { Mutation } from 'react-apollo';
import { ADD_POST } from '../graphql/mutations';

export default class NewPost extends Component {
  onSuccess = () => this.props.history.push('/');

  render() {
    return (
      <div>
        <h1>NEW POST</h1>
        <Mutation mutation={ADD_POST}>
          {createPost => (
            <PostForm onSubmit={createPost} onSuccess={this.onSuccess} />
          )}
        </Mutation>
      </div>
    )
  }
}
