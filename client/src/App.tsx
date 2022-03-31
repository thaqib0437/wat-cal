import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState("")

  React.useEffect(() => {
    fetch("/api")
    .then(d => d.json())
    .then(({message}) => setData(message))
  }, [])

  return (
    <div className="App">
      <h1>Setup Branch</h1>
      <p>{data == "" ? "Loading..." : data}</p>
    </div>
  );
}

export default App;