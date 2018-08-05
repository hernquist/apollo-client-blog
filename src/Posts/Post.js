import React, { Component } from 'react';
import { POST_QUERY } from '../graphql/queries';
import { Query} from 'react-apollo';


export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query 
        query={POST_QUERY}
        variables={{
          id: match.params.id
        }}

      >
        {({ loading, data }) => {
          if (loading) return "Loading ...";
          const { post } = data;

          return ( 
            <div>
              <h3>{post.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
            </div>
          )
        }}
      </Query>
    )
  }
}
