const features: string[] = [
  "Complete design customization options",
  "User-friendly and intuitive interface",
  "Support for multiple dates selections",
  "Effortlessly choose date ranges",
  "Disable specific dates as needed",
  "Flexible day-off configuration (Sunday, Monday, etc.)",
  "Comprehensive CSS customization for all elements",
  "Customizable calendar header",
  "Full design customization capabilities (Completely override full design)",
];

export default function KeyFeatures() {
  return (
    <div>
      <h2 className="_title">Plain React Calendar</h2>
      <p className="_description mt-4">
        It is a versatile solution that brings effortless customization and a
        wealth of features to your projects. With a strong focus on stability,
        security, and efficiency, our library offers a seamless and
        user-friendly experience. Whether you're a seasoned developer or just
        starting out, our simple documentation ensures easy integration. Elevate
        your applications with the power of Plain React Library and discover a
        new level of simplicity and control in date management.
      </p>

      <h2 className="_title mt-12">Key Features</h2>

      <ul className="mt-4 flex flex-col gap-2 list-disc list-inside">
        {features.map((feature, i) => (
          <li key={"feature_" + i} className="_description">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
