import React from "react";

class Login extends React.Component(){
  this.state = {
    isAuth: false
  }

  render() {
    return(
      <div className="login-page page"><h3>Login Container</h3>
      <button>Login</button>
      </div>
    )
  }
}

export default Login;
