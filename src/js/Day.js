import React from "react";
import Reservation from "./Reservation";
import AddReservationForm from "./AddReservationForm";

class Day extends React.Component {
  state = {
    reservationsIds: this.props.resIds,
    reservations: this.props.res
  };
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
          reservations[i].date,
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
