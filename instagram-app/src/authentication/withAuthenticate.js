import React from "react";

const withAuthenticate = Component => Auth =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }
    componentDidMount() {
      console.log(this.state.loggedIn);
      if (localStorage.getItem("username")) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }
    render() {
      return this.state.loggedIn ? <Component /> : <Auth />;
    }
  };

export default withAuthenticate;
