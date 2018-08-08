import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Post from './Posts/Post';
import Posts from './Posts/Posts';
import NewPost from './Posts/NewPost';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">React-Apollo-GraphQL-GraphCMS</h1>
            <Link to='/'>HOME</Link>
          </header>
          
          <main>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
