import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { Moment } from "moment";
import { Button } from "@mui/material";
import styled from "styled-components";
import moment from "moment";

export interface DateTimePickerProps {
  dates: {
    startDate: Moment | null;
    endDate: Moment | null;
  };
  setDates: any;
}

const StyledDateFilterButton = styled(Button)`
  && {
    margin-left: 0.25rem;
    margin-right: 0.25rem;
  }
`;

function DateTimeFilter(props: DateTimePickerProps) {
  const { dates, setDates } = props;

  const [focusedInput, setFocusedInput] = useState(null);

  function handleDateChange(startDate: Moment, endDate: Moment) {
    if (startDate) {
      setDates({
        ...dates,
        startDate: startDate.hour(0).minute(0).second(0),
      });
    }

    if (endDate) {
      setDates({
        ...dates,
        endDate: endDate.hour(23).minute(59).second(59),
      });
    }
  }

  /**
   * 
   * Function to set quick date ranges. The argument
   * passed is substracted to Today's date in order to
   * get the starting date.
   * 
   * Days ago should be passed as a positive argument.
   * 
   * @param daysAgo How many days from now should `startDate` be?
   */
  function setQuickDates(daysAgo: number): void {
    let startDate = moment().day(-daysAgo).hour(0).minute(59).second(59);
    let endDate = moment().hour(23).minute(59).second(59);
    setDates({
      startDate,
      endDate,
    });
  }

  function resetDates() {
    setDates({
      startDate: null,
      endDate: null,
    });
  }

  return (
    <>
      <StyledDateFilterButton
        variant="contained"
        color="secondary"
        onClick={() => setQuickDates(30)}
      >
        30 días
      </StyledDateFilterButton>
      <StyledDateFilterButton
        variant="contained"
        color="secondary"
        onClick={() => setQuickDates(7)}
      >
        7 días
      </StyledDateFilterButton>
      <DateRangePicker
        startDate={dates.startDate} // momentPropTypes.momentObj or null,
        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
        endDate={dates.endDate} // momentPropTypes.momentObj or null,
        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
        onDatesChange={({ startDate, endDate }: any) =>
          handleDateChange(startDate, endDate)
        } // PropTypes.func.isRequired,
        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
        onFocusChange={(focusedInput: any) => setFocusedInput(focusedInput)} // PropTypes.func.isRequired,
        displayFormat="DD/MM/YYYY"
        firstDayOfWeek={1}
        isOutsideRange={() => false}
      />
      <StyledDateFilterButton
        variant="text"
        color="secondary"
        onClick={resetDates}
      >
        Reiniciar filtro
      </StyledDateFilterButton>
    </>
  );
}

export default DateTimeFilter;
