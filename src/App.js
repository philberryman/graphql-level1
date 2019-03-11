import React, { Component } from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import Post from "./Posts/Post";
import Posts from "./Posts/Posts";
import NewPost from "./Posts/NewPost";

const client = new ApolloClient({
  uri: "https://api-euwest.graphcms.com/v1/cjsw589kdarvu01fj7h0nqkfc/master",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="App">
            <header className="App-header">
              <Link to={"/"}>graaphQL is great</Link>
            </header>
            <Link to={"/post/new"}>New Post!</Link>
            <Switch>
              <Route exact path="/" component={Posts} />
              <Route path="/post/new" component={NewPost} />
              <Route path="/post/:id" component={Post} />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
