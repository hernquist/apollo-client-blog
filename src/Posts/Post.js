import React, { Component } from 'react';
import { POST_QUERY } from '../graphql/queries';
import { Query} from 'react-apollo';
import UpdatePost from './UpdatePost';
import EditMode from './EditMode';


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
          const { post, isEditMode } = data;
          
          return ( 
            <div>
              <EditMode isEditMode={isEditMode} />
              {isEditMode ? (
                <section>
                  <h3>Edit Post</h3>
                  <UpdatePost post={post} />
                </section>)
              : (
                <section>
                  <h3>{post.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </section>
              )}
            </div>
          )
        }}
      </Query>
        
    )
  }
}
