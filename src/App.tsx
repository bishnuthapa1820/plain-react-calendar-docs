import Hero from "./container/hero";
import KeyFeatures from "./container/key-features";
import QuickStart from "./container/quick-start";
import AllProps from "./container/all-props";
import OverrideDefaultFunction from "./container/override-default-styles";
import Author from "./components/author";

export default function App() {
  return (
    <main className="_base-layout">
      <Hero />
      <KeyFeatures />
      <QuickStart />
      <AllProps />
      <OverrideDefaultFunction />
      <Author />
    </main>
  );
}
