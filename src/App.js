import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import apiKey from "./config";
import axios from "axios";

import Base from "./Components/Base";
import Photo from "./Components/Photo";

class App extends Component {
  state = {
    photos: [],
  };

  defaultSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) =>
        this.setState({ photos: response.data.photos.photo })
      );
  };

  performSearch = (query) => {
    this.defaultSearch(query);
  };

  render() {
    return (
      <BrowserRouter>
        <Base
          onSearch={this.defaultSearch}
          photos={this.state.photos}
          performSearch={this.performSearch}
        />
        <Route exact path="/search/:value" component={Photo} />
        <Route
          path="/search"
          render={() => <Photo photos={this.state.photos} />}
        />
      </BrowserRouter>
    );
  }
}

export default App;
