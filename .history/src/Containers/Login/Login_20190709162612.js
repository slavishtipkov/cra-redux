import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as authActions from "../../Redux/actions/authActions";

class Login extends React.Component {
  state = {
    redirectUrl: "/reports"
  };

  handleLogin = () => {
    this.props.dispatch(authActions.login(this.state.redirectUrl));
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

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    redirectUrl: state.auth.redirectUrl
  };
};

export default connect(mapStateToProps)(Login);
