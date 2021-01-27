import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import apiKey from "./config";
import axios from "axios";

import { Provider } from "./Context";

import Base from "./Components/Base";
import Nav from "./Components/Nav";
import NotFound from "./Components/NotFound";

class App extends Component {
  state = {
    photos: [],
    isLoading: true,
  };

  defaultSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) =>
        this.setState({ photos: response.data.photos.photo, isLoading: false })
      );
  };

  performSearch = (query) => {
    this.defaultSearch(query);
  };

  render() {
    return (
      <Provider
        value={{
          performSearch: this.defaultSearch,
          retrieveQuery: this.retrieveQuery,
          photos: this.state.photos,
          isLoading: this.state.isLoading,
        }}
      >
        <BrowserRouter>
          <Route path="/" component={Base} />
          <Route path="/search/:value" component={Nav} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
