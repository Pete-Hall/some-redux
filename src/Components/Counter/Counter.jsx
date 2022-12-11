import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Counter() {

  const [count, setCount] = useState(0);
  const reduxCount = useSelector((state) => state.counter.value);

  useEffect(() => {
    console.log(count);
  }, [count])

  const increment = () => {
    setCount(x => x + 1);
    // setCount(count + 1);
  }

  return (
    <div className="App">
      <p>The counter: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>The redux counter (different component): {reduxCount}</p>
    </div>
  );
}

export default Counter;