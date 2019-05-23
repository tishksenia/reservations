import React from "react";
import FormErrors from "./FormErrors";

class ReservationForm extends React.Component {
  state = {
    patientName: "",
    doctorName: "",
    from: "",
    to: "",
    date: "",
    note: "",
    color: "blue",
    formErrors: { patientName: "", doctorName: "", from: "", to: "", date: "" },
    patientNameValid: false,
    doctorNameValid: false,
    fromValid: false,
    toValid: false,
    dateValid: false
  };
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };
  validateField(fieldName, value) {
    var fieldValidationErrors = this.state.formErrors;
    var patientNameValid = this.state.patientNameValid;
    var doctorNameValid = this.state.doctorNameValid;
    var fromValid = this.state.fromValid;
    var toValid = this.state.toValid;
    var dateValid = this.state.dateValid;
    switch (fieldName) {
      case "patientName":
        patientNameValid = value != "";
        fieldValidationErrors.patientName = patientNameValid ? "" : "is empty";
        break;
      case "doctorName":
        doctorNameValid = value != "";
        fieldValidationErrors.doctorName = doctorNameValid ? "" : "is empty";
        break;
      case "from":
        fromValid = value != "";
        fieldValidationErrors.from = fromValid ? "" : "is empty";
        break;
      case "to":
        toValid = value != "";
        fieldValidationErrors.to = toValid ? "" : "is empty";
        break;
      case "date":
        dateValid = value != "";
        fieldValidationErrors.date = dateValid ? "" : "is empty";
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        patientNameValid,
        doctorNameValid,
        toValid,
        fromValid,
        dateValid
      },
      this.validateForm
    );
  }
  validateForm() {
    this.setState({
      formValid:
        this.state.patientNameValid &&
        this.state.doctorNameValid &&
        this.state.toValid &&
        this.state.fromValid &&
        this.state.dateValid
    });
  }
  // validateTimeField() {
  //   var time_array = value.split(":");
  //   var mins = +value.split(":")[1];
  //   if (!Number.isInteger(mins)) {
  //     time_array[1] = "00";
  //   }
  //   value = time_array.join(":");
  // }
  render() {
    return (
      <form action="#" className="add-reservation-form__form">
        <FormErrors formErrors={this.state.formErrors} />
        <fieldset className="add-reservation-form__names-fieldset add-reservation-form__fieldset">
          <label className="text-input-label names-fieldset__patient-label">
            Patient:
            <input
              onChange={this.handleInputChange}
              type="text"
              className="text-input names-fieldset__patient-input"
              value={this.state.patientName}
              name="patientName"
            />
          </label>
          <label className="text-input-label names-fieldset__doctor-label">
            Doctor:
            <input
              onChange={this.handleInputChange}
              type="text"
              className="text-input names-fieldset__doctor-input"
              value={this.state.doctorName}
              name="doctorName"
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__times-fieldset add-reservation-form__fieldset">
          <legend className="times-fieldset__caption">Time</legend>
          <label className="time-input-label times-fieldset__from-label">
            From:
            <input
              onChange={this.handleInputChange}
              type="time"
              className="time-input times-fieldset__from-input"
              value={this.state.from}
              name="from"
            />
          </label>
          <label className="time-input-label times-fieldset__to-label">
            To:
            <input
              onChange={this.handleInputChange}
              type="time"
              className="time-input times-fieldset__to-input"
              value={this.state.to}
              name="to"
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__date-fieldset add-reservation-form__fieldset">
          <label className="date-input-label date-fieldset__date-label">
            Date:
            <input
              onChange={this.handleInputChange}
              type="date"
              className="date-input date-fieldset__date-input"
              value={this.state.date}
              name="date"
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__note-fieldset add-reservation-form__fieldset">
          <label className="textarea-input-label note-fieldset__note-label">
            Additional info:
            <input
              onChange={this.handleInputChange}
              type="textfield"
              className="date-input date-fieldset__date-input"
              value={this.state.note}
              name="note"
            />
          </label>
        </fieldset>
        <fieldset className="add-reservation-form__color-fieldset add-reservation-form__fieldset">
          <div onChange={this.handleInputChange}>
            <input type="radio" id="yellow" value="yellow" name="color" />
            <label htmlFor="yellow">Yellow</label>

            <input
              type="radio"
              id="darkpurple"
              value="darkpurple"
              name="color"
            />
            <label htmlFor="darkpurple">Dark Purple</label>

            <input
              type="radio"
              name="color"
              id="blue"
              value="blue"
              defaultChecked
            />
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
          disabled={!this.state.formValid}
        >
          Add Reservation
        </button>
      </form>
    );
  }
}

export default ReservationForm;
