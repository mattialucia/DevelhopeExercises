import { useState } from "react"

const ClickCounter = () => {
    const [count, setCount] = useState(0)

    return (
        <div style={{ textAlign: "center", margin: "60px" }}>
          <h2>1) ClickCounter:</h2>
          <h3>Counter: {count}</h3>
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => setCount(count - 1)}>Decrement</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      );
}

export default ClickCounter

