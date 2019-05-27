import React from "react";
import ReactDOM from "react-dom";
import TimeTable from "./TimeTable";
import Day from "./Day";
import Header from "./layout/Header";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header /> */}
        <TimeTable start="00:00" end="23:00" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
