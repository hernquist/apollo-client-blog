import React, { Component } from 'react';
import { POST_QUERY } from '../graphql/queries';
import { TOGGLE_POST } from '../graphql/mutations';
import { Query, Mutation } from 'react-apollo';
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
          console.log(post);
          const check = !post.check;
          
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
                  <Mutation
                    mutation={TOGGLE_POST}
                    variables={{
                      id: post.id,
                      check
                    }}
                    optimisticResponse={{
                      __typename: 'Mutation',
                      updatePost: {
                        __typename: 'Post',
                        check
                      }
                    }}
                    update={(cache, {data: { updatePost }}) => {
                      const data = cache.readQuery({
                        query: POST_QUERY,
                        variables: {
                          id: post.id
                        }
                      });
                      data.post.check = updatePost.check;
                      cache.writeQuery({
                        query: POST_QUERY,
                        data: {
                          ...data,
                          post: data.post
                        }
                      })
                    }}
                  >
                    {updatePost => (
                      <input
                        style={{ height: '80px' }}
                        type="checkbox" 
                        checked={post.check} 
                        onChange={updatePost}
                      />
                    )}
                  </Mutation>
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

