import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  login = e => {
    e.preventDefault();
    localStorage.setItem("username", this.state.username);
    document.location.reload();
  };
  render() {
    return (
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          placeholder="Username"
          onChange={this.handleChanges}
        />
        <input
          type="text"
          name="password"
          value={this.state.password}
          placeholder="Password"
          onChange={this.handleChanges}
        />
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
