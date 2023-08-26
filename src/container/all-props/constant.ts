export type PropertyType = {
  name: string;
  defaultValue?: string;
  description: string;
  example: string;
};

export const ALL_PROPS: PropertyType[] = [
  {
    name: "value",
    defaultValue: "An empty list of strings like this []",
    description: `Date must be a string separated by "-" hyphen. If you pass a date, it will be the selected date.`,
    example: `You can pass a date in this way: "2023-05-15" or ["2023-04-05", "2023-08-07"] or null. If you set null, there is no selected date.`,
  },

  {
    name: "onChange",
    defaultValue: "",
    description:
      "Function to set value. It's always a list of dates so while setting it, use dates[0] to get the actual value (date).",
    example: `function onChange(dates)=> {}. Here dates will be a list of dates like ["2023-08-15"].`,
  },

  {
    name: "minDate",
    defaultValue: "Not applied",
    description:
      "If you set a minDate, a user cannot select any date that is less than this date.",
    example: 'minDate is like "2020-05-15"',
  },

  {
    name: "maxDate",
    defaultValue: "Not applied",
    description:
      "Maximum date. If you set or pass data on the props, a user cannot select a greater date then this date.",
    example: `maxDate is like "2040-09-30"`,
  },
  {
    name: "iconHeaderSize",
    defaultValue: "14",
    description:
      "Header icons size. You can increase or decrease their size; value must be in number.",
    example: `it would be 14 or 16, 17...`,
  },
  {
    name: "isHideHeader",
    defaultValue: "false",
    description:
      "If you set isHideHeader as true, it will hide the calendar's header.",
    example: `You can set it in props like this isHideHeader={true}.`,
  },
  {
    name: "onYearChange",
    defaultValue: "Not applied",
    description:
      "If you need to fire (run) a function every time when a user changes the calendar's year, you can pass a function with a string parameter.",
    example: `onYearChange={(date)=> {}}. Here date will be the same string as shown on the calendar's header.`,
  },
  {
    name: "onMonthChange",
    defaultValue: "Not applied",
    description:
      "If you need to fire (run) a function every time when a user changes the calendar's month, you can pass a function with a string parameter.",
    example: `onMonthChange={(date)=> {}}. Here, the date will be the same as onYearChange's.`,
  },

  {
    name: "isSelectMultipleDates",
    defaultValue: "false",
    description:
      "If you need to select multiple dates, you can set it as true. It will allow you to select multiple dates. The selected dates will be in a list of dates.",
    example: `isSelectMultipleDates={true}`,
  },
  {
    name: "isSelectDatesInRange",
    defaultValue: "false",
    description:
      "If you need to select dates in range, just set it as true. If you set both isSelectDatesInRange and isSelectMultipleDates, the isSelectDatesInRange will override the isSelectMultipleDates. The selected dates will be in a list of dates.",
    example: `isSelectDatesInRange={true}.`,
  },
  {
    name: "dayOffList",
    defaultValue: "not applied",
    description: `If you need to set the day/s as off day/s like (Sunday and Monday), you can pass a list of enum to dayOffList. When you pass dayOffList, the calendar by default sets read color text to all dates that fall on day off. dayOffList enum will be "su", "mo", "tu", "we", "th", "fr", "sa".`,
    example: `You can pass a list of enums to dayOffList like dayOffList={["su", "mo"]}. This will make text color red to all days that fall in the day off list`,
  },
  {
    name: "isDisableDayOff",
    defaultValue: "false",
    description:
      "If you want to disable (not select) all days that fall in dayOffList, set it as true. It only works if you pass dayOffList.",
    example: `isDisableDayOff={true}`,
  },
  {
    name: "disableDateList",
    defaultValue: "Not applied",
    description: `If you want to disable some dates, you can pass a list of dates formatted by "-" like ["2023-05-06", "2023-05-07"].`,
    example: `Pass a list of string dates to disable them.`,
  },
  {
    name: "classNames",
    defaultValue: "Set default CSS classes",
    description: `If you want any CSS style to modify, you can use classNames. It is an object of all with keys and values. 
    Type of classnames: type ClassNames = {
        mainContainer?: string;
        header?: string;
        currentDateText?: string;
        rightHeaderContainer?: string;
        headerYearContainer?: string;
        headerIcon?: string;
        headerYearText?: string;
        headerMonthContainer?: string;
        headerMonthText?: string;
        calendarGrid?: string;
        dayText?: string;
        date?: string;
        selectedDate?: string;
        currentDate?: string;
        offDay?: string;
        extraDateInGrid?: string;
        disableDate?: string;
        disableDayOff?: string;
      }`,
    example: `If you need to override styles of any element, just find out its name and pass the class names such as if you need to override default styles for the current date text, just pass {currentDateText: "<your-css-classnames>"}, it will override the default style. But remember it will also override its whole default style so you have to add extra styles for it. You will find a whole tutorial below about how to override default styles.`,
  },
  {
    name: "customHeader",
    defaultValue: "Not applied",
    description:
      "If you are not satisfied with the default calendar's header, you can totally override it. To override it, just create you own component and pass it to customHeader. You will find the whole tutorial below to apply your custom header.",
    example: `Find the override full header section below.`,
  },
  {
    name: "overrideDesign",
    defaultValue: "Not applied",
    description:
      "If you want to override full design, you can do this in a very simple way. You just need to create your own component and pass it to overrideDesign. All the states and functions are given to your component through props render technique. Don't worry, you will find the whole tutorial below with examples.",
    example: `Find the full design customization section`,
  },
];
