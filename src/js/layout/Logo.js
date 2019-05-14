import React from "react";

class Logo extends React.Component {
  state = { loading: true };

  render() {
    return (
      <div className="logo">
        <h1>Logo text</h1>
      </div>
    );
  }
}

export default Logo;
