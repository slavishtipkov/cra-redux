import React from "react";

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

export default Login;
