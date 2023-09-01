import calenderBasicUse from "../../assets/quick-start/calendar-basic-use.png";
import calenderBasicUseOutput from "../../assets/quick-start/calender-basic-use-output.png";

export default function QuickStart() {
  return (
    <div className="mt-[80px]">
      <h4 className="_title">Quick Start</h4>
      <p className="_sub-title mt-4">Installation</p>

      <p className="_description mt-4">Via npm</p>
      <div className="mt-2 px-4 py-2 rounded-sm text-gray-700 bg-gray-100">
        <p className="text-[16px]">npm install plain-react-calendar</p>
      </div>

      <p className="_description mt-4">Via yarn</p>
      <div className="mt-2 px-4 py-2 rounded-sm text-gray-700 bg-gray-100">
        <p className="text-[16px]">yarn add plain-react-calendar</p>
      </div>

      <div className="mt-8">
        <p className="_description">
          After installing the library, just import plain-react-calendar and its
          style and and create a state to store the date. If you don't want the
          default date, you can set null value instead of date. Here the date
          should be a string or list of string or null value. And it must be a
          string separated by "-" like "2023-05-25".{" "}
          <span className="text-gray-700 bg-yellow-100">
            But this date "2023-5-25" doesn't work here because both month and
            date should be two digits, so that it must be "2023-05-25".
          </span>{" "}
          You can use{" "}
          <span className="bg-yellow-100">"getStringFormattedDate"</span>{" "}
          function provided by Plain React Calendar to convert a date object to
          a string formatted date. Here the value and onChange are two props
          that are compulsory; value could be a string or list of string or
          null, and onChange is the function that accepts a parameter, and its
          parameter is always a list of dates.
        </p>

        <div className="mt-8 px-4 py-2 rounded-sm text-gray-700 bg-gray-100">
          <p className="text-[16px]">{`import "plain-react-calendar/dist/styles.css"`}</p>
          <p className="mt-2 text-[16px]">{`import { PlainReactCalendar } from "plain-react-calendar"`}</p>
        </div>

        <img
          src={calenderBasicUse}
          alt="calender-basic-use"
          className="mt-8 rounded-sm w-full max-w-[800px]"
        />
      </div>

      <div className="mt-8">
        <p className="_description font-semibold">Output</p>
        <img
          src={calenderBasicUseOutput}
          alt="calender-output"
          className="mt-4 rounded-sm shadow"
        />
      </div>
    </div>
  );
}
