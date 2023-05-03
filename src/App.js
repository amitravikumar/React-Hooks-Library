import "./App.css";
import EffectTutorial from "./UseEffect/EffectTutorial";
import ReducerTutorial from "./UseReducer/ReducerTutorial";
import StateTutorial from "./UseState/StateTutorial";

export default function App() {
  return (
    <div className="App">
      {/* <StateTutorial /> */}
      {/* <ReducerTutorial /> */}
      <EffectTutorial />
    </div>
  );
}
