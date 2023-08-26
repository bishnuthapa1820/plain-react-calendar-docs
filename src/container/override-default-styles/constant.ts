export type PropertyType = {
  name: string;
  defaultValue?: string;
  description: string;
  example: string;
};

export const CUSTOM_HEADER_PROPS: PropertyType[] = [
  {
    name: "displayDate",
    defaultValue: "",
    description: `This prop variable provides the date that a user selects by clicking in the header section.`,
    example: `It can be "2023-07-01", or "2023-08-1" or ...`,
  },
  {
    name: "selectedDate",
    defaultValue: "An empty list of string date",
    description: `This prop variable provides all the dates that a user has selected.`,
    example: `It can be "2023-07-04", or ["2023-08-1"] or null`,
  },
  {
    name: "handleYearChange",
    defaultValue: "",
    description: `This function serves to update the year and exclusively accepts two values: either "-1" or "+1". If you provide "+1" as an argument, the function initiates a validation process and adjusts the year to the subsequent one. Conversely, when "-1" is provided, the function performs similar validation and sets the year to the preceding one.`,
    example: `handleYearChange("+1") or handleYearChange("-1")`,
  },
  {
    name: "handleMonthChange",
    defaultValue: "",
    description: `This function facilitates the adjustment of the month, allowing transitions to both the succeeding and preceding months. Similar to the "handleYearChange" function, it accepts two values for control: "+1" for the next month and "-1" for the previous month. This function undertakes validation procedures and updates the month accordingly, paralleling the manner in which the "handleYearChange" function operates for year updates.`,
    example: `handleMonthChange("+1") or handleMonthChange("-1)`,
  },
  {
    name: "setNewDateForCalendar",
    defaultValue: "",
    description: `This function enables users to update any given date, not limited to incrementing or decrementing it by a year or a month. It offers the flexibility to directly set a specific date as desired.`,
    example: `setNewDateForCalendar("2023-04-06")`,
  },
];

export const OVERRIDE_FULL_DESIGN_PROPS: PropertyType[] = [
  {
    name: "displayDate",
    defaultValue: "",
    description: `This prop variable provides the date that a user selects by clicking in the header section.`,
    example: `It can be "2023-07-01", or "2023-08-1" or ...`,
  },
  {
    name: "displayRawDate",
    defaultValue: "",
    description: `This prop variable provides the same date as the "displayDate" prop does. But the only difference between these props is that the "displayDate" always converts month of date to 1, which enhances the performance.`,
    example: `It can be "2023-07-04", or "2023-08-1" or ...`,
  },

  {
    name: "selectedDate",
    defaultValue: "An empty list of string date",
    description: `This prop variable provides all the dates that a user has selected.`,
    example: `It can be "2023-07-04", or ["2023-08-1"] or null`,
  },

  {
    name: "allDatesInMonth",
    defaultValue: "",
    description: `It provides a list of  dates of the current month from 1 to the last date of the month. In order to fill the full grid it adds some dates of the previous and next month.`,
    example: `[..., "2023-08-01", .... "2023-08-31", ...]`,
  },
  {
    name: "dayList",
    defaultValue: "",
    description: `It provides a list of days like ["su", "mo", ....., "sa"]`,
    example: ``,
  },
  {
    name: "handleYearChange",
    defaultValue: "",
    description: `This function serves to update the year and exclusively accepts two values: either "-1" or "+1". If you provide "+1" as an argument, the function initiates a validation process and adjusts the year to the subsequent one. Conversely, when "-1" is provided, the function performs similar validation and sets the year to the preceding one.`,
    example: `handleYearChange("+1") or handleYearChange("-1")`,
  },
  {
    name: "handleMonthChange",
    defaultValue: "",
    description: `This function facilitates the adjustment of the month, allowing transitions to both the succeeding and preceding months. Similar to the "handleYearChange" function, it accepts two values for control: "+1" for the next month and "-1" for the previous month. This function undertakes validation procedures and updates the month accordingly, paralleling the manner in which the "handleYearChange" function operates for year updates.`,
    example: `handleMonthChange("+1") or handleMonthChange("-1)`,
  },
  {
    name: "setNewDateForCalendar",
    defaultValue: "",
    description: `This function enables users to update any given date, not limited to incrementing or decrementing it by a year or a month. It offers the flexibility to directly set a specific date as desired.`,
    example: `setNewDateForCalendar("2023-04-06")`,
  },
  {
    name: "getStyles",
    defaultValue: "",
    description: `It's a function that has one parameter named "date" and returns if the provided date is the current date or selected date or disabled date, etc. It checks the following conditions; isCurrentDate, isSelectedDate, isOffDay, isDisableDayOff, isExtraDayInGrid, and isDisableDate.`,
    example: ``,
  },
  {
    name: "Others props",
    defaultValue: "",
    description: `minDate, maxDate, iconHeaderSize, isHideHeader, isSelectMultipleDates, isSelectDatesInRange, dayOffList, isDisableDayOff, disableDateList, classNames. These props descriptions and examples are in the app props section above.`,
    example: ``,
  },
];
