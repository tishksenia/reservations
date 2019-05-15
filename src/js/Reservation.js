import React from "react";

class Reservation extends React.Component {
  state = {};
  getStartTimeArray() {
    return this.props.start.split(":");
  }
  getEndTimeArray() {
    return this.props.end.split(":");
  }
  getTopPosition() {
    var day_start_hour = this.props.dayStarts.split(":")[0];
    var block_height = 60;
    var time_array = this.getStartTimeArray();
    var hour = +time_array[0];
    var mins = +time_array[1];
    return (hour - day_start_hour) * block_height + mins;
  }
  getHeight() {
    var day_start_hour = +this.props.dayStarts.split(":")[0];
    var block_height = 60;
    var start_array = this.getStartTimeArray();
    var end_array = this.getEndTimeArray();
    //if
    if (+end_array[0] < +start_array[0]) {
      var delta_hour = 24 - +start_array[0] + +end_array[0];
    } else {
      var delta_hour = +end_array[0] - +start_array[0];
    }
    var delta_min = +end_array[1] - +start_array[1];
    return +delta_hour * block_height + +delta_min;
    //TO DO: work around edge values
  }
  getReservationStyle() {
    var style = {
      top: this.getTopPosition(),
      height: this.getHeight()
    };
    // if reservation starts earlier than day starts or ends later, hide it
    if (
      +this.getStartTimeArray()[0] < +this.props.dayStarts.split(":")[0] ||
      +this.getEndTimeArray()[0] > +this.props.dayEnds.split(":")[0]
    ) {
      style.display = "none";
    }
    return style;
  }
  getColorClass(color) {
    if (color == "yellow") {
      return "reservation--green";
    }
    if (color == "darkpurple") {
      return "reservation--darkpurple";
    }
    if (color == "blue") {
      return "reservation--blue";
    }
    if (color == "lime") {
      return "reservation--lime";
    }
  }
  render() {
    return (
      <div>
        <button
          className={`reservation ${this.getColorClass(this.props.color)}`}
          style={this.getReservationStyle()}
        >
          <div className="reservation__title">
            <p className="patient-name">{`Patient: ${
              this.props.patientName
            }`}</p>
            <p className="patient-name">{`Doctor: ${this.props.doctorName}`}</p>
            <p className="reservation__note">{`Note: ${this.props.note}`}</p>
          </div>
        </button>
      </div>
    );
  }
}

export default Reservation;
