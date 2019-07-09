import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    isAuth: false
  };

  render() {
    return (
      <div className="login-page page">
        <h3>Login Container</h3>
        <div className="login-button">Login</div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
