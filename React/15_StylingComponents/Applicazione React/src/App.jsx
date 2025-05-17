import "./App.css";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="app">
      <Welcome name="John" age={25} />
      <Counter initialValue={0} incrementAmount={1} />
      <Login />
    </div>
  );
};

export default App;
