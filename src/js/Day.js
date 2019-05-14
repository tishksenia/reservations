import React from "react";

class Day extends React.Component {
  state = {};
  componentDidMount() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray()
    });
  }
  getTimesArray() {
    var times = [];
    for (var i = 0; i <= 23; i++) {
      times.push(i + ":00");
      times.push(i + ":30");
    }
    return times;
  }
  getCurrentTime() {
    var today = new Date();
    var currentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //{currentTime: currentTime} -> {currentTime}
    //this.setState({ currentTime });
    return currentTime;
  }
  render() {
    return (
      <div className="container">
        <p>{this.state.currentTime}</p>

        <p>{this.state.times}</p>
      </div>
    );
  }
}

export default Day;
