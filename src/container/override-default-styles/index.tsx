import Note from "../../components/note";

import classNamesImg from "../../assets/override-default-styles/classnames.png";
import classNameInOjb from "../../assets/override-default-styles/classnames-in-obj.png";
import mainContainerCssImg from "../../assets/override-default-styles/main-container-css.png";
import overrideMainContainerCssImg from "../../assets/override-default-styles/override-main-container-css.png";
import headerDefaultStyle from "../../assets/override-default-styles/header-default-style.png";
import overrideHeaderDefaultStyle from "../../assets/override-default-styles/override-header-default-style.png";
import selectedDateStyle from "../../assets/override-default-styles/selected-date-style.png";
import overrideSelectedDateStyle from "../../assets/override-default-styles/override-selected-date-style.png";
import fullOverrideHeader from "../../assets/override-default-styles/full-override-header.png";
import fullOverrideHeaderOutput from "../../assets/override-default-styles/full-override-header-output.png";
import overrideFullDesign from "../../assets/override-default-styles/override-full-design.png";

import { CUSTOM_HEADER_PROPS, OVERRIDE_FULL_DESIGN_PROPS } from "./constant";

export default function OverrideDefaultFunction() {
  return (
    <div className="mt-[80px]">
      <h4 className="_title">Override Default Styles</h4>
      <p className="_description mt-4">
        To keep things simple, let's use Tailwind CSS class names to illustrate
        how to modify the default styles of a calendar. Please keep in mind that
        when you apply a class name to an element, it will automatically replace
        the element's default styles. Therefore, even if your custom class name
        doesn't contain specific CSS properties, it's still necessary to define
        the default styles.
      </p>

      <h5 className="_sub-title mt-8">CSS Design Pattern</h5>

      <img
        src={classNamesImg}
        alt="classnames-img"
        className="mt-16 w-full object-cover rounded-sm"
      />

      <p className="_description mt-16">classnames object type in typescript</p>
      <img
        src={classNameInOjb}
        alt="classnames-img"
        className="mt-4 rounded-sm"
      />

      <div className="mt-16">
        <h5 className="_sub-title">
          Override Custom Design of the main container (mainContainer)
        </h5>
        <p className="_description mt-4 font-semibold">CSS Styles</p>
        <img
          src={mainContainerCssImg}
          alt="css-img"
          className="mt-4 rounded-sm"
        />

        <p className="_description mt-8">
          Override default styles of the mainContainer
        </p>

        <img
          src={overrideMainContainerCssImg}
          alt="override-css"
          className="mt-4 rounded-sm"
        />
        <Note className="mt-4">
          The Plain React Calendar comes with its own set of default CSS styles.
          Should you decide to override these styles, please be aware that your
          modifications will entirely substitute the default appearance. In
          other words, any alterations you make will replace all the
          pre-existing default styles of the calendar. This approach allows you
          to have full control over the visual presentation of the calendar, but
          it's important to note that any aspect not explicitly defined in your
          custom styles will also be affected.
        </Note>
      </div>

      <h5 className="_sub-title mt-16">
        Let's override the default design of the header
      </h5>
      <p className="_description mt-4 font-semibold">CSS Styles</p>
      <img src={headerDefaultStyle} alt="css-img" className="mt-4 rounded-sm" />

      <p className="_description mt-8">Override default styles of the header</p>

      <img
        src={overrideHeaderDefaultStyle}
        alt="override-css"
        className="mt-4 rounded-sm"
      />
      <Note className="mt-4">
        In the example above, we are customizing the default styles of the
        header. The Plain React Calendar applies "header" class name as a
        default style, but it also applies "comHeader" class name, which cannot
        be overridden. All the class names that have "com" prefix cannot be
        overridden.
      </Note>

      <h5 className="_sub-title mt-16">
        Let's override the default background color of the selected date/s
      </h5>
      <p className="_description mt-4 font-semibold">CSS Styles</p>
      <img
        src={selectedDateStyle}
        alt="override-css"
        className="mt-4 rounded-sm"
      />

      <p className="_description mt-8">
        Override default styles of the selected date and also "date"
      </p>

      <img
        src={overrideSelectedDateStyle}
        alt="override-css"
        className="mt-4 rounded-sm"
      />
      <Note className="mt-4">
        This method allows you to replace the default styles of all elements.
        The names of the elements and their respective positions within the
        calendar have been illustrated earlier (in the CSS design pattern and
        classnames object type in typescript sections). You can find out all
        styles on{" "}
        <a
          target="_blank"
          href="https://github.com/bishnuthapa1820/plain-react-calendar/blob/main/src/container/plain-react-calendar/styles/index.module.css"
          className="text-blue-500"
        >
          GitHub.
        </a>{" "}
        But you might feel it's a little bit of a strength because to keep
        things simple, we just remove the prefix "com" and "opt" in all the
        examples above. It's important to remember that all CSS class names with
        the "com" prefix are mandatory class names, thus they cannot be
        overridden. Conversely, class names beginning with the "opt" prefix
        represent default (optional) styles directly applied by the Plain React
        Calendar. These can be overridden by specifying the corresponding names
        using key-value pairs within the classNames prop. You can identify the
        styling class names for the header as "comHeader" and "optHeader" within
        the styles. The "comHeader" class name is mandatory, while the
        "optHeader" class name can be represented simply as "header" in the
        classnames object and can be modified.
      </Note>

      <h4 className="_title mt-16">Override Full Header Section</h4>
      <p className="_description mt-4">
        In order to completely override the entire header section, you can pass
        your component to "customHeader" prop. And you are given all the
        functions and data required for building your own header through props.
        In the props you can find displayDate, handleChangeMonth,
        handleChangeYear, and setNewDateForCalendar.
      </p>

      <img
        src={fullOverrideHeader}
        alt="override-css"
        className="mt-4 rounded-sm"
      />

      <img
        src={fullOverrideHeaderOutput}
        alt="override-css"
        className="mt-4 rounded-sm shadow"
      />

      <h5 className="_sub-title mt-16">Custom Header Component's Props</h5>
      <div className="mt-4 overflow-auto">
        <table className="mt-4 w-full min-w-[1000px] border-separate border-spacing-4">
          <thead>
            <tr>
              <th>Props</th>
              <th>Default Value</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {CUSTOM_HEADER_PROPS.map((prop, i) => (
              <tr key={"prop_" + i}>
                <td>{prop.name}</td>
                <td>{prop.defaultValue}</td>
                <td>{prop.description}</td>
                <td>{prop.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Note>
        Instead of hiding the header using "isHideHeader" and creating your own
        component for your custom header, you can use "customHeader" prop to
        fully customize your header section. The main benefit of using it is
        that it provides all necessary data and functions required for the
        calendar's header. Furthermore, these functions and data are equipped to
        handle various date validation tasks, such as minimum and maximum date
        constraints.
      </Note>

      <h4 className="_title mt-16">Full Design Customization</h4>
      <p className="_description mt-4">
        In order to completely override the entire design of the calendar, you
        can use "overrideDesign" prop. It works like the "customHeader" does but
        has more data and functions provided through props (props rendering).
        You can follow the same step you did while overriding full header using
        "customHeader" prop.
      </p>

      <img
        src={overrideFullDesign}
        alt="override-css"
        className="mt-4 rounded-sm"
      />

      <h5 className="_sub-title mt-16">Override Design Component's Props</h5>
      <div className="mt-4 overflow-auto">
        <table className="mt-4 w-full min-w-[1000px] border-separate border-spacing-4">
          <thead>
            <tr>
              <th>Props</th>
              <th>Default Value</th>
              <th>Description</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            {OVERRIDE_FULL_DESIGN_PROPS.map((prop, i) => (
              <tr key={"prop_" + i}>
                <td>{prop.name}</td>
                <td>{prop.defaultValue}</td>
                <td>{prop.description}</td>
                <td>{prop.example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
