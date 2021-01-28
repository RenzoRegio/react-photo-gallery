import React, { Component } from "react";
import { Consumer } from "../Context";

//Components
import Nav from "./Nav";
import SearchButton from "./SearchButton";

class Search extends Component {
  render() {
    return (
      <Consumer>
        {({ performSearch }) => {
          /**
           * Executes the window's onpopstate event handler and calls the handlePopState function.
           */

          function componentDidMount() {
            window.onpopstate = handlePopState;
          }

          /**
           * Once called, handlePopState executes the performSearch function and takes on the history object's parameter value as the value or keyword to retrieve the images to be displayed.
           * @param {*} e - the event that takes place when the onpopstate event handler is executed.
           */

          const handlePopState = (e) => {
            e.preventDefault();
            const query = this.props.match.params.value;
            performSearch(query);
          };

          /**
           * Callback function that is executed only when the form's onSubmit event handler is called. Pushes the created path to the history object and calls performSearch function.
           * @param {*} e - the event that takes place when the onpopstate event handler is executed.
           */

          const handleSubmit = (e) => {
            e.preventDefault();
            const query = this.search.value;
            const path = `/search/${query}`;
            this.props.history.push(path);
            performSearch(query);
            e.currentTarget.reset();
          };

          componentDidMount();

          // Returns the JSX of the Search and Nav form.
          return (
            <React.Fragment>
              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  name="search"
                  placeholder="Search for a photo..."
                  ref={(input) => (this.search = input)}
                  required
                />
                <SearchButton />
              </form>
              <Nav />
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
