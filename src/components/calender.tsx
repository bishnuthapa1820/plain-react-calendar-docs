// Testing...

import { useState } from "react";
import "plain-react-calendar/dist/styles.css";
import {
  PlainReactCalendar,
  getStringFormattedDate,
} from "plain-react-calendar";

export default function Calendar() {
  const [date, setDate] = useState<string>("2023-08-19");

  console.log(getStringFormattedDate(new Date()));

  return (
    <PlainReactCalendar
      value={date}
      onChange={(newDate) => setDate(newDate[0])}
    />
  );
}
