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

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.search.input);
  };

  render() {
    return (
      <form className="search-box-form" onSubmit={this.handleSubmit}>
        <div className="search-icon" />
        <div className="search-input">
          <input
            type="text"
            placeholder="Search All of Varde"
            onChange={this.handleChange}
            value={this.state.search.input}
          />

          <input type="submit" value="Search" />
        </div>
      </form>
    );
  }
}

export default SearchBox;
