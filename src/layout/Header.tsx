import React from "react";
import Logo from "./Logo";
import Nav from "./Nav";

class Header extends React.Component {
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
