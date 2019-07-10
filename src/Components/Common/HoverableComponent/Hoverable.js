import React from "react";

import "./hoverable.scss";

class Hoverable extends React.Component {
  state = { hovered: false };

  render() {
    return (
      <div
        className="hoverable-component"
        onMouseEnter={() => this.setState({ hovered: true })}
        onMouseLeave={() => this.setState({ hovered: false })}
      >
        {this.props.children(this.state.hovered)}
      </div>
    );
  }
}

export default Hoverable;
