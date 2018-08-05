import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: "",
    body: "",
    status: "PUBLISHED"
  }

  handleEvent = e => {
    const formData = {};
    formData[e.target.name] = e.target.value
    this.setState({ ...formData });
  }

  resetState = () => this.setState({
    title: '',
    body: ''
  })

  render() {
    const { onSubmit } = this.props;
    const { title, body } = this.state;

    return (
      <form 
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body
            }
          })
            .then(() => this.resetState())
            .catch(err => console.log(err))
        }}
      >
        <input
          type="text"
          onChange={this.handleEvent}
          value={title}
          placeholder="title"
          name="title"
        />
        <textarea
          type="text"
          onChange={this.handleEvent}
          value={body}
          placeholder="body"
          name="body"
        />
        <button>Submit</button>
      </form>
    )
  }
}
