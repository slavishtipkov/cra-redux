import React from "react";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    redirectUrl: ""
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

const mapStateToProps = state => {
  return {
    username: state.user.username
  };
};

export default connect(mapStateToProps)(Login);
