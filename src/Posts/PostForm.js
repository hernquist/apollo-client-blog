import React, { Component } from 'react'

export default class PostForm extends Component {
  
  render() {
    const { 
      title, 
      body, 
      createPost, 
      handleEvent,
      resetState 
    } = this.props;

    return (
      <form onSubmit={e => {
        e.preventDefault();
        createPost()
          .then(() => resetState())
          .catch(err => console.log(err))
      }}>
        <input
          type="text"
          onChange={handleEvent}
          value={title}
          placeholder="title"
          name="title"
        />
        <textarea
          type="text"
          onChange={handleEvent}
          value={body}
          placeholder="body"
          name="body"
        />
        <button>Submit</button>
      </form>
    )
  }
}
