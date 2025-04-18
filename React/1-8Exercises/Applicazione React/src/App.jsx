import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import AlertClock from "./components/AlertClock";
import Counter from "./components/Counter";
import Clock from "./components/Clock";
import Submit from "./components/Submit";
import MouseClicker from "./components/MouseClicker";

const App = () => {
  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  };

  return (
    <div>
      <Clock />
      <HelloWorld />
      <AlertClock handleClick={handleClick} />
      <Message />
      <Welcome name="John" age={25} />
      <Submit />
      <MouseClicker />
      <Counter initialValue={0} incrementAmount={1} />
    </div>
  );
};

export default App;
