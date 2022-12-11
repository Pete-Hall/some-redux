import React, { useEffect, useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

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
    </div>
  );
}

export default Counter;