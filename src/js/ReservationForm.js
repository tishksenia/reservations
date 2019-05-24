import React from "react";
import FormErrors from "./FormErrors";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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
        patientNameValid = value == "" ? false : true;
        fieldValidationErrors.patientName = patientNameValid ? "" : "is empty";
        break;
      case "doctorName":
        doctorNameValid = value == "" ? false : true;
        fieldValidationErrors.doctorName = doctorNameValid ? "" : "is empty";
        break;
      case "from":
        fromValid = value == "" ? false : true;
        fieldValidationErrors.from = fromValid ? "" : "is empty";
        break;
      case "to":
        toValid = value == "" ? false : true;
        fieldValidationErrors.to = toValid ? "" : "is empty";
        break;
      case "date":
        dateValid = value == "" ? false : true;
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
      <form action="#" className="reservation-form__form">
        <FormErrors formErrors={this.state.formErrors} />
        <fieldset className="reservation-form__names-fieldset reservation-form__fieldset">
          <TextField
            label="Patient"
            value={this.state.patientName}
            onChange={this.handleInputChange}
            name="patientName"
            variant="outlined"
            margin="dense"
          />
          <TextField
            label="Doctor"
            value={this.state.doctorName}
            onChange={this.handleInputChange}
            name="doctorName"
            variant="outlined"
            margin="dense"
          />
        </fieldset>

        <fieldset className="reservation-form__times-fieldset reservation-form__fieldset">
          <legend className="times-fieldset__caption">Time</legend>
          <TextField
            type="time"
            label="From"
            onChange={this.handleInputChange}
            value={this.state.from}
            name="from"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />

          <TextField
            type="time"
            label="To"
            onChange={this.handleInputChange}
            value={this.state.to}
            name="to"
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              step: 300 // 5 min
            }}
          />
        </fieldset>
        <fieldset className="reservation-form__date-fieldset reservation-form__fieldset">
          <TextField
            type="date"
            label="Date"
            onChange={this.handleInputChange}
            value={this.state.date}
            name="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        </fieldset>
        <TextField
          label="Additional info"
          value={this.state.note}
          onChange={this.handleInputChange}
          name="note"
          variant="outlined"
        />
        <fieldset className="reservation-form__color-fieldset reservation-form__fieldset">
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
          className="reservation-form__send"
          disabled={!this.state.formValid}
        >
          Add Reservation
        </button>
      </form>
    );
  }
}

export default ReservationForm;
