import React from "react";
import { connect } from "react-redux";

import * as authActions from "../../Redux/actions/authActions";

class Login extends React.Component {
  state = {
    auth: {
      isAuth: true,
      loginRedirectUrl: ""
    }
  };

  handleLogin = () => {
    this.props.dispatch(authActions.login(this.state.auth.loginRedirectUrl));
  };

  render() {
    return (
      <div className="login-page page">
        <h3>Login Container</h3>
        <div className="login-button" onClick={this.handleLogin}>
          Login
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth
  };
};

export default connect(mapStateToProps)(Login);
