import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as authActions from "../../Redux/actions/authActions";

class Login extends React.Component {
  state = {
    auth: {
      isAuth: false,
      redirectUrl: ""
    }
  };

  handleLogin = () => {
    this.setState({
      auth: {
        isAuth: true,
        redirectUrl: "/reports"
      }
    });
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
    redirectUrl: state.redirectUrl
  };
};

export default connect(mapStateToProps)(Login);
