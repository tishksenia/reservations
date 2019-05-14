import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

class Header extends React.Component {
  state = { loading: true };

  render() {
    return (
      <header className="page-header">
        <Logo />
        <Nav />
      </header>
    );
  }
}

export default Header;
