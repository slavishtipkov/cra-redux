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

  handleChange(evenet) {
    const searchValue = this.state.searchText;
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
            value={this.state.searchText}
          />
        </div>
      </div>
    );
  }
}
