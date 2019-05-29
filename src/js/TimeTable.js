import React from "react";
import Reservation from "./Reservation";
import AddReservationForm from "./AddReservationForm";
import Day from "./Day";

class TimeTable extends React.Component {
  state = {
    times: [],
    currentTime: "",
    days: [],
    date: "",
    weeks: []
  };
  componentDidMount() {
    this.setState({
      currentTime: this.getCurrentTime(),
      times: this.getTimesArray(),
      //week: this.getCurrentWeek()
      weeks: this.setupWeeks(),
      date: this.setupCurrentDate()
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
  calculateLastDayOfMonth() {
    let today = new Date();
    let lastDayOfMonth = new Date(
      today.getFullYear(),
      today.getMonth() + 1,
      0
    ).getDate();
    return lastDayOfMonth;
  }
  setupCurrentDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    let date = `${year}-${month}-${day}`;
    return date;
  }

  getCurrentWeek() {
    return weeks[1];
  }
  getPreviousWeek() {
    return weeks[0];
  }
  getNextWeek() {
    return weeks[2];
  }

  // Sets up an array with weeks inside.
  // Position in array corresponds with a week's ID.
  setupWeeks() {
    let weeks = [];
    let currentWeek = this.setupCurrentWeek();
    let previousWeek = this.setupNearbyWeek(currentWeek, "before");
    let nextWeek = this.setupNearbyWeek(currentWeek, "after");
    weeks.push(previousWeek, currentWeek, nextWeek);
    return weeks;
  }

  // Sets up current { week } object, using current date
  // week = { days: [], starts: "yyyy-m-d", ends: "yyyy-m-d"}
  setupCurrentWeek() {
    let week = {};
    let id = 1;

    let today = new Date();
    let weekDay = today.getDay();
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();

    //calculation of the last day of month
    let lastDayOfMonth = this.calculateLastDayOfMonth();
    // 0 is sunday
    if (weekDay === 0) {
      week.ends = year + "-" + month + "-" + +day;
      week.starts = year + "-" + month + "-" + (+day - 1);
    }
    //and one is monday
    else if (weekDay === 1) {
      week.starts = year + "-" + month + "-" + +day;
      week.ends = year + "-" + month + "-" + (+day + 6);
    } else {
      week.starts = year + "-" + month + "-" + (+day - +weekDay);
      week.ends = year + "-" + month + "-" + (+day + +weekDay);
    }
    //if week ends on day that doesn't belong to current month, set it to the last day of month
    if (week.ends.split("-")[2] > lastDayOfMonth) {
      week.ends = week.ends = year + "-" + month + "-" + lastDayOfMonth;
    }
    week.id = id;
    week.days = [];
    return week;
  }
  // { week }, position -> { week }
  // Given the current week object and position of nearby week (before or after), generate an empty week object
  // id is 1 for current week, 0 for previous and 2 for the next one
  setupNearbyWeek(currentWeek, position) {
    let week = {};
    let id = 0;
    let day, month, year;
    if (position == "before") {
      id = 0;
      let current_week_starts_array = currentWeek.starts.split("-");
      day = current_week_starts_array[2];
      month = current_week_starts_array[1];
      year = current_week_starts_array[0];
      week.ends = `${year}-${month}-${day - 1}`;
      if (day < 9) {
        week.starts = `${year}-${month}-1`;
      }
      //if previous week of current month does not exist
      else if (day == 1) {
        week = [];
        return week;
      } else {
        week.starts = `${year}-${month}-${day - 8}`;
      }
    }
    if (position == "after") {
      id = 2;
      let current_week_ends_array = currentWeek.ends.split("-");
      day = current_week_ends_array[2];
      month = current_week_ends_array[1];
      year = current_week_ends_array[0];
      week.starts = `${year}-${month}-${day + 1}`;
      week.ends = `${year}-${month}-${day + 8}`;
      let lastDayOfMonth = this.calculateLastDayOfMonth();
      if (day + 8 > lastDayOfMonth) {
        week.ends = `${year}-${month}-${lastDayOfMonth}`;
      }
      //if next week of current month does not exist
      if (day == lastDayOfMonth) {
        week = [];
        return week;
      }
    }
    week.days = [];
    week.id = id;
    return week;
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

  // Given string of date "yyyy-m-d", produce the days array
  // getDaysByDate(date) {}

  //Given string of date "yyyy-m-d", produce id of the week it corresponds to
  getIdOfWeekByDate(date) {
    for (var i = 0; i < 3; i++) {
      if (
        date.split("-")[2] >= this.state.weeks[i].starts.split("-")[2] &&
        date.split("-")[2] <= this.state.weeks[i].ends.split("-")[2]
      ) {
        let id = i;
      }
    }
    return id;
  }

  handleAddReservationSend = (
    start,
    end,
    patient,
    doctor,
    note,
    color,
    date
  ) => event => {
    //if the reservation is unique was not really checked here
    //assuming that form closes and reset to it's defaults when button was pressed
    event.preventDefault();
    let days = this.state.days;
    if (days[date] == undefined) {
      let day = {};
      day.reservations = [];
      day.reservationsIds = [];
      let id = day.reservationsIds.length + 1;
      day.reservationsIds.push(id);
      //do I need this "ids" array or am I being dumb?
      day.reservations.push({ start, end, patient, doctor, note, color, date });

      days[date] = day;
    } else {
      let day = this.state.days[date];

      let reservs = this.state.days[date].reservations;
      let ids = this.state.days[date].reservationsIds;
      let id = ids.length + 1;
      ids.push(id);
      reservs.push({ start, end, patient, doctor, note, color, date });
      day.reservations = reservs;
      day.reservationsIds = ids;
      days[date] = day;
      //days: day
    }

    this.setState({ days, date });
    this.AddReservationForm.current.hideForm();
  };
  // getDayRef = node => {
  //   this._dayRef = ReactDOM.findDOMNode();
  // };
  getDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    return mm + "/" + dd + "/" + yyyy;
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
          <Day
            start={this.props.start}
            end={this.props.end}
            resIds={this.state.reservationsIds}
            res={this.state.reservations}
            days={this.state.days}
            date={this.state.date}
          />
          {/* <Week weeks={this.state.weeks} date={this.state.date} /> */}
        </div>
      </div>
    );
  }
}
export default TimeTable;
