import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: ""
    };
  }

  render() {
    return (
      <div className="search-box">
        <div className="search-icon" />
        <div className="search-input">
          <input type="text" placeholder="Search All of Varde" />
        </div>
      </div>
    );
  }
}
