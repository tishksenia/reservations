import React from "react";

class Day extends React.Component {
  state = { times: [], currentTime: "", timestampStyle: "" };
  componentDidMount() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray()
    });
    this.intervalID = setInterval(() => this.tick(), 60000);
  }
  getTimesArray() {
    var times = [];
    for (var i = 0; i <= 23; i++) {
      times.push(i + ":00");
    }
    return times;
  }
  getCurrentTime() {
    var today = new Date();
    var currentTime = today.getHours() + ":" + today.getMinutes();
    /* + ":" + today.getSeconds()*/
    //we don't really need seconds
    //{currentTime: currentTime} -> {currentTime}
    return currentTime;
  }
  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
  }
  getTimestampStyle() {
    // will always be HH:MM
    const block_height = 60;

    // top-padding of the timestamp parent
    const top_padding = 20;
    var time_array = this.state.currentTime.split(":");
    var hours = time_array[0];
    var mins = time_array[1];
    var top = +hours * +block_height + +mins + top_padding;
    var styles = {
      top: top + "px"
    };
    return styles;
  }
  tick() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray(),
      timestampStyle: this.getTimestampStyle()
    });
  }

  render() {
    return (
      <div className="container">
        <h1 className="page-heading">{`Today is ${this.getDate()}`}</h1>
        <p className="current-time">{this.state.currentTime}</p>
        <div className="time-table">
          <div className="timestamp" style={this.getTimestampStyle()} />
          <div className="times">
            {this.state.times.map(value => (
              <div>
                <div className="ruler" />
                <p className="times__item" key={value}>
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="table" />
        </div>
      </div>
    );
  }
}

export default Day;
