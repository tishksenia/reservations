import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";
import Header from "./layout/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Day start="9:00" end="20:30" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
