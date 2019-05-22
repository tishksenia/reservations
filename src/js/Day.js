import React from "react";
import Reservation from "./Reservation";
import AddReservationForm from "./AddReservationForm";

class Day extends React.Component {
  state = {
    times: [],
    currentTime: "",
    reservationsIds: [],
    reservations: []
  };
  componentDidMount() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray(),
      reservations: []
    });
    this.intervalID = setInterval(() => this.tick(), 60000);
    this.AddReservationForm = React.createRef();
  }
  getTimesArray() {
    var times = [];
    var start_hour = +this.props.start.split(":")[0];
    var end_hour = +this.props.end.split(":")[0];
    for (var i = start_hour; i < end_hour; i++) {
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
    // HH:MM
    var start_time_array = this.props.start.split(":");
    var end_time_array = this.props.start.split(":");
    var start_hour = +start_time_array[0];
    // var start_minute = +start_time_array[1];

    const block_height = 60;

    // top-padding of the timestamp parent
    const top_padding = 20;
    var time_array = this.state.currentTime.split(":");

    var hours = +time_array[0];
    var mins = +time_array[1];
    var top = (hours - start_hour) * block_height + mins + top_padding;
    var styles = {
      top: top + "px"
    };
    // hide timestamp if work day is already over or didn't start yet
    if (
      +end_time_array[0] != 0 &&
      (hours > +end_time_array[0] || hours < +start_time_array[0])
    ) {
      styles.display = "none";
    }
    return styles;
  }
  tick() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray()
    });
  }
  addReservation(start, end, patient, doctor, note, color, id) {
    return (
      <Reservation
        start={start}
        end={end}
        patientName={patient}
        doctorName={doctor}
        color={color}
        note={note}
        dayStarts={this.props.start}
        dayEnds={this.props.end}
        key={id}
      />
    );
  }
  handleAddReservationSend = (
    start,
    end,
    patient,
    doctor,
    note,
    color
  ) => event => {
    //if the reservation is unique was not really checked here
    //assuming that form closes and reset to it's defaults when button was pressed
    event.preventDefault();
    var id = this.state.reservationsIds.length + 1;
    var res_ids = this.state.reservationsIds;
    res_ids.push(id);
    var reservs = this.state.reservations;
    reservs.push({ start, end, patient, doctor, note, color });
    this.setState({ reservationsIds: res_ids, reservations: reservs });
    this.AddReservationForm.current.hideForm();
  };
  renderReservations() {
    var reservations = this.state.reservations;
    var elements = [];
    var id = 0;
    for (var i = 0; i < reservations.length; i++) {
      id = +this.state.reservationsIds[i];
      elements.push(
        this.addReservation(
          reservations[i].start,
          reservations[i].end,
          reservations[i].patient,
          reservations[i].doctor,
          reservations[i].note,
          reservations[i].color,
          id
        )
      );
    }
    return elements;
  }
  render() {
    return (
      <div className="container">
        <h1 className="page-heading">{`Today is ${this.getDate()}`}</h1>
        <p className="current-time">{this.state.currentTime}</p>
        <AddReservationForm
          sendHandler={this.handleAddReservationSend}
          ref={this.AddReservationForm}
        >
          {" "}
        </AddReservationForm>
        <div className="time-table">
          <div className="timestamp" style={this.getTimestampStyle()} />
          <div className="times">
            {this.state.times.map(value => (
              <div key={value}>
                <div className="ruler" />
                <p className="times__item" key={value}>
                  {value}
                </p>
              </div>
            ))}
          </div>
          <div className="table">{this.renderReservations()}</div>
        </div>
      </div>
    );
  }
}

export default Day;
