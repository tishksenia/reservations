import React from "react";
import Reservation from "./Reservation";
import AddReservationForm from "./AddReservationForm";

class Day extends React.Component {
  state = {};
  componentDidMount() {}

  addReservation(start, end, patient, doctor, note, color, date, id) {
    return (
      <Reservation
        start={start}
        end={end}
        patientName={patient}
        doctorName={doctor}
        color={color}
        note={note}
        date={date}
        dayStarts={this.props.start}
        dayEnds={this.props.end}
        key={id}
      />
    );
  }
  renderReservations() {
    var days = this.props.days;
    var date = this.props.date;
    if (days[date] === undefined) {
      return "";
    }
    var reservs = days[date].reservations;
    var resIds = days[date].reservationsIds;

    //var reservations = this.state.reservations;
    var elements = [];
    var id = 0;
    for (var i = 0; i < reservs.length; i++) {
      id = +resIds[i];
      elements.push(
        this.addReservation(
          reservs[i].start,
          reservs[i].end,
          reservs[i].patient,
          reservs[i].doctor,
          reservs[i].note,
          reservs[i].color,
          reservs[i].date,
          id
        )
      );
    }
    return elements;
  }
  render() {
    return <div className="table">{this.renderReservations()}</div>;
  }
}

export default Day;
