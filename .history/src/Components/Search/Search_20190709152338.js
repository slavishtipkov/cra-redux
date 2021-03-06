import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: {
        input: ""
      }
    };
  }

  handleChange(event) {
    const search = { ...this.state.search, input: event.target.value };
    this.setState({ search });
  }

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
