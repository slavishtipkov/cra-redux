import React from "react";

class SearchBox extends React.Component {
  state = {
    search: {
      input: ""
    }
  };

  handleChange = event => {
    const search = { ...this.state.search, input: event.target.value };
    this.setState({ search });
  };

  handleSubmit = event => {};

  render() {
    return (
      <div className="search-box">
        <div className="search-icon" />
        <div className="search-input">
          <input
            type="text"
            placeholder="Search All of Varde"
            onChange={this.handleChange}
            value={this.state.search.input}
          />
        </div>
      </div>
    );
  }
}
