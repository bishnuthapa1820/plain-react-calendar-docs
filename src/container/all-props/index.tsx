import { ALL_PROPS } from "./constant";

export default function AllProps() {
  return (
    <div className="mt-[80px]">
      <h4 className="_title">All Props</h4>

      <table className="mt-4 w-full overflow-auto border-separate border-spacing-4">
        <thead>
          <tr>
            <th>Props</th>
            <th>Default Value</th>
            <th>Description</th>
            <th>Example</th>
          </tr>
        </thead>
        <tbody>
          {ALL_PROPS.map((prop, i) => (
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
  );
}
