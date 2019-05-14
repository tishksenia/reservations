import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // constructor(props) {
  //     super(props);
  // }
  render() {
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById("root"));
