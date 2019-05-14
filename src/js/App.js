import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";
import Header from "./layout/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Day />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
