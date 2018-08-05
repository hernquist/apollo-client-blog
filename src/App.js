import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
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
      <Router>
        <ApolloProvider client={client}>
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">React-Apollo-GraphQL-GraphCMS</h1>
              <Link to='/'>HOME</Link>
            </header>

            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          

          </div>
        </ApolloProvider>
      </Router>
    );
  }
}

export default App;
