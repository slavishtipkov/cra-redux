import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
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

  render() {
    return (
      <div className="login-page page">
        <div>
          Okta implementation is disabled, so to be able to navigate between
          pages without account or any configurations.
        </div>
        <NavLink to="/reports">Go to reports</NavLink>
      </div>
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
