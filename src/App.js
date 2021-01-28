import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "./Context";
import axios from "axios";
import apiKey from "./config";

//Components
import Search from "./Components/Search";
import Photo from "./Components/Photo";
import httpError from "./Components/http404";

class App extends Component {
  state = {
    photos: [],
    isLoading: true,
  };

  /**
   * Retrieves data from the flickr API and sets the states accordinly.
   * @param {*} query - The keyword or value that defines the images to be displayed on the screen.
   */

  performSearch = (query) => {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) =>
        this.setState({
          photos: response.data.photos.photo,
          isLoading: false,
        })
      );
  };

  render() {
    return (
      <Provider
        value={{
          performSearch: this.performSearch,
          photos: this.state.photos,
          isLoading: this.state.isLoading,
        }}
      >
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search/:value" component={Photo} />
            <Route component={httpError} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
