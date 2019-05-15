import React from "react";

class Day extends React.Component {
  state = { times: [], currentTime: "", timestampStyle: "" };
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
      //times.push(i + ":30");
    }
    return times;
  }
  getCurrentTime() {
    var today = new Date();
    var currentTime =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //{currentTime: currentTime} -> {currentTime}
    return currentTime;
  }
  getTimestampStyle() {
    // will always be HH:MM:SS
    const block_height = 50;
    var time_array = this.state.currentTime.split(":");
    var hours = time_array[0];
    var mins = time_array[1];
    var styles = {
      top: hours * 50 + "px"
    };
    return styles;
  }

  render() {
    return (
      <div className="container">
        <p>{this.state.currentTime}</p>
        <div className="time-table">
          <div className="times">
            {this.state.times.map(value => (
              <p className="times__item" key={value}>
                {value}
              </p>
            ))}
          </div>
          <div className="table">
            <div className="timestamp" style={this.getTimestampStyle()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Day;
