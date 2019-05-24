import React from "react";
import ReservationForm from "./ReservationForm";
class AddReservationForm extends React.Component {
  state = {
    form: document.querySelector(".reservation-form__form"),
    showForm: false
  };
  handleShowFormClick = e => {
    this.setState({ showForm: true });
  };
  handleCancelClick = e => {
    this.setState({ showForm: false });
  };
  hideForm() {
    this.setState({ showForm: false });
  }
  render() {
    return (
      <div className="reservation-form">
        <button
          className="reservation-form__show-form"
          onClick={this.handleShowFormClick}
        >
          +
        </button>
        {this.state.showForm ? (
          <button
            className="reservation-form__cancel"
            onClick={this.handleCancelClick}
          >
            -
          </button>
        ) : null}
        {this.state.showForm ? (
          <ReservationForm sendHandler={this.props.sendHandler} />
        ) : null}
      </div>
    );
  }
}

export default AddReservationForm;
