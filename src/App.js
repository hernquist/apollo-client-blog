import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import { POSTS_QUERY } from './graphql/queries';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api-useast.graphcms.com/v1/cjkg8z3wf0jan01fhumzt7z56/master'
})

// Using the client and a query outside of react
// client.query({
//   query: POSTS_QUERY
// }).then(
//   res => console.log(res) 
// )

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React-Apollo-GraphQL-GraphCMS</h1>
          </header>
          <Query query={POSTS_QUERY}>
            {({loading, data}) => {
              if (loading) return "Loading ...";
              const { posts } = data;
              
              return posts.map(post => <h1 key={post.id}>{post.title}</h1>)
            }}
          </Query> 
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
