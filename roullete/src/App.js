import React, { useState, useEffect } from "react";

const App = (props) => {
  let [count, setCount] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev - 1)
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
};

export default App;
