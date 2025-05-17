import React from "react";
import useCounter from "./hooks/useCounter";
import FilteredList from "./components/FilteredList";

const App = () => {
  const { count, increment, decrement, reset } = useCounter();
  const data = [
    { id: 1, name: "Mattia", age: 25 },
    { id: 2, name: "Luca", age: 31 },
    { id: 3, name: "Franci", age: 16 },
    { id: 4, name: "Sofia", age: 23 }
  ];

  return (
    <div>
      <h1>useCallback - useMemo</h1>
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <h2>Filtered List</h2>
      <FilteredList list={data} />
    </div>
  );
};

export default App;

