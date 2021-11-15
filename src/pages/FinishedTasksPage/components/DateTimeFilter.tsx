import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DateRangePicker } from "react-dates";
import { Moment } from "moment";

export interface DateTimePickerProps {
  dates: {
    startDate: Moment | null;
    endDate: Moment | null;
  };
  setDates: any;
}

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

  return (
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
  );
}

export default DateTimeFilter;
