import React, { Component } from 'react'
import PostForm from './PostForm';
import { Mutation } from 'react-apollo';
import { ADD_POST } from '../graphql/mutations';

export default class NewPost extends Component {
  state = {
      title: "",
      body: "",
      status: "PUBLISHED"
  }

  handleEvent = e => {
    const formData = {};
    formData[e.target.name] = e.target.value
    console.log(formData)
    this.setState({...formData}); 
  }

  resetState = () => this.setState({
    title: '',
    body: ''
  })
  
  render() {
    const { title, body } = this.state;

    return (
      <div>
        <h1>NEW POST</h1>
        <Mutation
          mutation={ADD_POST}
          variables={{ body, title }}
        >
          {createPost => (
            <PostForm 
              body={body}
              title={title}
              createPost={createPost}
              handleEvent={this.handleEvent}
              resetState={this.resetState}
            />
          )}
        </Mutation>
      </div>
    )
  }
}

// {/* <PostForm /> */}