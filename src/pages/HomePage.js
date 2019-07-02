import React, { Component } from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import {
  HeaderOne,
  HeaderTwo,
  HeaderThree,
  Button,
  Container
} from "../components/CommonElements";
import axios from "axios";
import { DateRangePicker } from "react-dates";
import moment from "moment";

export default class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      startDate: null,
      endDate: null,
      totalDays: null,
      totalMondays: null,
      isLeapYear: null,
      dateFact: ""
    };
  }

  /*Stop Button from Submitting Form by default*/
  handleSubmit = e => {
    e.preventDefault();
  };

  getHistoricalData = () => {
    const startDay = this.state.startDate.format("DD");
    const startMonth = this.state.startDate.format("MM");
    axios
      .get(`http://numbersapi.com/${startMonth}/${startDay}`)
      .then(response => {
        this.setState({ dateFact: response.data });
      })
      .catch(error => console.log(error));
  };

  handleGetDateFact = () => {
    if (this.state.startDate === null) {
      alert("Please choose a date range");
    } else {
      let startDate = moment();
      let endDate = moment();
      startDate = this.state.startDate;
      endDate = this.state.endDate;
      const totalDays = endDate.diff(startDate, "days") + 1;
      if (startDate.isLeapYear() || endDate.isLeapYear()) {
        this.setState({ isLeapYear: "Yes" });
      } else {
        this.setState({ isLeapYear: "No" });
      }
      let dayIndex = 1;
      let mondays = [];
      let currentDay = startDate.clone();
      while (currentDay.day(7 + dayIndex).isBefore(endDate)) {
        mondays.push(currentDay.clone());
      }
      const totalMondays = mondays.length;
      this.setState({ totalDays, totalMondays });
      this.getHistoricalData();
    }
  };

  render() {
    return (
      <Container>
        <HeaderOne>Claudio Ricci VAT Global Test</HeaderOne>
        <form onSubmit={this.handleSubmit}>
          <HeaderTwo>Select Date Range</HeaderTwo>
          <DateRangePicker
            displayFormat="DD/MM/YYYY"
            startDate={this.state.startDate}
            startDateId="startDateInput"
            endDate={this.state.endDate}
            endDateId="endDateInput"
            onDatesChange={({ startDate, endDate }) =>
              this.setState({ startDate, endDate })
            }
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
          />
          <Container>
            <HeaderThree>
              Total Days: {this.state.totalDays}
              <br />
              Total Mondays: {this.state.totalMondays}
              <br />
              Does the Date range cover a Leap Year?: {this.state.isLeapYear}
            </HeaderThree>
            <Button onClick={this.handleGetDateFact}>
              Click for a random fact about this date in history
            </Button>
            <p>{this.state.dateFact}</p>
          </Container>
        </form>
      </Container>
    );
  }
}
