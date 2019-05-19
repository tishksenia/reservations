import React from "react";

class ReservationForm extends React.Component {
  state = {
    patientName: "",
    doctorName: "",
    from: "02:00",
    to: "03:00",
    date: "",
    note: "",
    color: ""
  };
  handlePatientNameChange = event => {
    this.setState({ patientName: event.target.value });
  };
  handleDoctorNameChange = event => {
    this.setState({ doctorName: event.target.value });
  };
  handleFromTimeChange = event => {
    this.setState({ from: event.target.value });
  };
  handleToTimeChange = event => {
    this.setState({ to: event.target.value });
  };
  handleDateChange = event => {
    this.setState({ date: event.target.value });
  };
  handleNoteChange = event => {
    this.setState({ note: event.target.value });
  };
  handleColorChange = event => {
    this.setState({ color: event.target.value });
  };

  render() {
    return (
      <form action="#" className="add-reservation-form__form">
        <fieldset className="add-reservation-form__names-fieldset add-reservation-form__fieldset">
          <label className="text-input-label names-fieldset__patient-label">
            Patient:
            <input
              onChange={this.handlePatientNameChange}
              type="text"
              className="text-input names-fieldset__patient-input"
              value={this.state.patientName}
            />
          </label>
          <label className="text-input-label names-fieldset__doctor-label">
            Doctor:
            <input
              onChange={this.handleDoctorNameChange}
              type="text"
              className="text-input names-fieldset__doctor-input"
              value={this.state.doctorName}
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__times-fieldset add-reservation-form__fieldset">
          <legend className="times-fieldset__caption">Time</legend>
          <label className="time-input-label times-fieldset__from-label">
            From:
            <input
              onChange={this.handleFromTimeChange}
              type="time"
              className="time-input times-fieldset__from-input"
              value={this.state.from}
            />
          </label>
          <label className="time-input-label times-fieldset__to-label">
            To:
            <input
              onChange={this.handleToTimeChange}
              type="time"
              className="time-input times-fieldset__to-input"
              value={this.state.to}
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__date-fieldset add-reservation-form__fieldset">
          <label className="date-input-label date-fieldset__date-label">
            Date:
            <input
              onChange={this.handleDateChange}
              type="date"
              className="date-input date-fieldset__date-input"
              value={this.state.date}
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__note-fieldset add-reservation-form__fieldset">
          <label className="textarea-input-label note-fieldset__note-label">
            Additional info:
            <input
              onChange={this.handleNoteChange}
              type="textfield"
              className="date-input date-fieldset__date-input"
              value={this.state.note}
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__color-fieldset add-reservation-form__fieldset">
          <div onChange={this.handleColorChange}>
            <input type="radio" id="yellow" value="yellow" name="color" />
            <label htmlFor="yellow">Yellow</label>

            <input
              type="radio"
              id="darkpurple"
              value="darkpurple"
              name="color"
            />
            <label htmlFor="darkpurple">Dark Purple</label>

            <input type="radio" name="color" id="blue" value="blue" />
            <label htmlFor="blue">Blue</label>

            <input type="radio" id="lime" value="lime" name="color" />
            <label htmlFor="lime">Lime</label>
          </div>
        </fieldset>
        <button
          onClick={this.props.sendHandler(
            this.state.from,
            this.state.to,
            this.state.patientName,
            this.state.doctorName,
            this.state.note,
            this.state.color
          )}
          type="submit"
          className="add-reservation-form__send"
        >
          Add Reservation
        </button>
      </form>
    );
  }
}

export default ReservationForm;
