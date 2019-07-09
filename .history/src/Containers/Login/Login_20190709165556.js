import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import * as authActions from "../../Redux/actions/authActions";

class Login extends React.Component {
  state = {
    auth: {
      isAuth: false,
      redirectUrl: "/"
    }
  };

  handleLogin = () => {
    this.setState({
      auth: {
        isAuth: true,
        redirectUrl: "/reports"
      }
    });
    this.props.dispatch(authActions.login(this.state.auth));
  };

  redirect = redirectUrl => {
    return <Redirect to={redirectUrl} />;
  };

  render() {
    return (
      {state.auth.isAuth ? this.redirect : 
        <div className="login-page page">
        <h3>Login Container</h3>
        <button className="login-button" onClick={this.handleLogin}>
          Login Button
        </button>
      </div>
      }
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(mapStateToProps)(Login);
