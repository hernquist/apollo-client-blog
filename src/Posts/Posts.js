import React, { Component } from 'react';
import { POSTS_QUERY } from '../graphql/queries';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

export default class Posts extends Component {
  render() {
    return (
      <div>
        <Link className="button" to='/post/new'>NEW POST</Link>
        <ol className="posts-listing">
          <Query query={POSTS_QUERY}>
            {({ loading, data, fetchMore }) => {
              if (loading) return "Loading ...";
              const { posts } = data;

              return (
                <React.Fragment> 
                  {posts.map(post => (
                    <li key= { post.id }>
                      <Link to={`/post/${post.id}`}>
                        <h5>
                          {post.title}
                        </h5>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button onClick={() => fetchMore({
                      variables: {
                        skip: posts.length
                      },
                      updateQuery: (prev, { fetchMoreResult }) => {
                        if(!fetchMoreResult) return prev;
                        return Object.assign({}, prev, {
                          posts: [...prev.posts, ...fetchMoreResult.posts]
                        })
                      }
                    })}>
                      Load More
                    </button>
                  </li>
                </React.Fragment>   
              ) 
            }}
          </Query>
        </ol>
      </div>
    )
  }
}
