import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [cnt, setCnt] = useState(0);
  const increment = () => {
    setCnt(cnt + 1);
  };
  return (
    <div className="App">
      {cnt}
      <button onClick={increment}> increment </button>
    </div>
  );
}
