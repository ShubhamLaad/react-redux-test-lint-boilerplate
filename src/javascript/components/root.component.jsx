import React, { Component } from "react";
import { Link } from "react-router-dom";

class RootComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <header>header <Link to="/next-page">next page</Link></header>
        {this.props.children}
        <footer>footer</footer>
      </React.Fragment>
    )
  }
}

export default RootComponent;