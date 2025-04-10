import "./App.css";
import HelloWorld from "./components/HelloWorld";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import AlertClock from "./components/AlertClock";
import Counter from "./components/Counter";
import Clock from "./components/Clock";

const App = () => {
  const handleClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    alert(`Current Time: ${currentTime}`);
  };

  return (
    <div>
      <HelloWorld />
      <AlertClock handleClick={handleClick} />
      <Message />
      <Welcome name="John" age={25} />
      <Counter initialValue={0} incrementAmount={1} />
      <Clock />
    </div>
  );
};

export default App;
