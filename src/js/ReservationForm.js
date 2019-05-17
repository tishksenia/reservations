import React from "react";

class ReservationForm extends React.Component {
  state = {
    patientName: "",
    doctorName: "",
    from: "",
    to: "",
    date: ""
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
  handleSend = event => {};
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
            />
          </label>
          <label className="text-input-label names-fieldset__doctor-label">
            Doctor:
            <input
              onChange={this.handleDoctorNameChange}
              type="text"
              className="text-input names-fieldset__doctor-input"
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
            />
          </label>
          <label className="time-input-label times-fieldset__to-label">
            To:
            <input
              onChange={this.handleToTimeChange}
              type="time"
              className="time-input times-fieldset__to-input"
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
            />
          </label>
        </fieldset>
        <button
          onClick={this.handleSend}
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
