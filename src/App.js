import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import apiKey from "./config";
import axios from "axios";

import { Provider } from "./Context";

import Home from "./Components/Home";
import Nav from "./Components/Nav";
import httpError from "./Components/http404";

class App extends Component {
  state = {
    photos: [],
    isLoading: true,
    query: "hi",
  };

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) =>
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false,
          query: query,
        })
      );
  };

  retrieveQuery = (q) => {
    this.performSearch(q);
  };

  componentDidMount() {
    window.onpopstate = this.handlePopState;
  }

  componentWillUnmout() {
    window.onpopstate = null;
  }

  handlePopState = (e) => {
    e.preventDefault();
    const query = document.querySelector(".photo-container > h2");
    if (query.textContent !== "Loading...") {
      this.performSearch(query.textContent);
    }
  };

  render() {
    return (
      <Provider
        value={{
          performSearch: this.performSearch,
          photos: this.state.photos,
          isLoading: this.state.isLoading,
          applyParams: this.applyParams,
          retrieveQuery: this.retrieveQuery,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" render={() => <Redirect to="/search" />} />
            <Route exact path="/search" component={Home} />
            <Route exact path="/search/:value" component={Nav} />
            <Route component={httpError} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
