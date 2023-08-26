// Testing...

import { useState } from "react";
import { PlainReactCalendar } from "plain-react-calendar";

export default function Calendar() {
  const [date, setDate] = useState<string>("2023-08-08");

  return (
    <PlainReactCalendar
      value={date}
      onChange={(newDate) => setDate(newDate[0])}
      overrideDesign={(props) => {
        // All the required data and functions have been provided on props.
        console.log(props);

        return (
          <div>
            <section>Your header section</section>
            <section>
              your grid section including day (Sunday, Monday,..) and date
              (1,2,3,...)
            </section>
          </div>
        );
      }}
    />
  );
}
