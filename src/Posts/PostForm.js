import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PostForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onSuccess: PropTypes.func,
    post: PropTypes.object,
  }

  static defaultProps = {
    post: {},
    onSuccess: () => null
  }

  state = {
    id: this.props.post.id || null,
    title: this.props.post.title || "",
    body: this.props.post.body || "",
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
    const { onSubmit, onSuccess } = this.props;
    const { title, body, id } = this.state;

    // this is reusable... if there is no id, NEW_POST doesn't care about id variable
    // it just ignores it
    return (
      <form 
        onSubmit={e => {
          e.preventDefault();
          onSubmit({
            variables: {
              title,
              body,
              id
            }
          })
            .then(() => {
              onSuccess();
            })
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
        <button className="button">Submit</button>
      </form>
    )
  }
}
