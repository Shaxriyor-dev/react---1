import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("Javohir");
  const [event, counts] = useState([
    { title: "My name is Shaxriyor . My job is fronend programmer", id: 1 },
    { title: "My name is Shaxriyor . My job is backend programmer", id: 2 },
    { title: "My name is Shaxriyor . My job is linux programmer", id: 3 },
  ]);

  const clik = () => {
    setCount("Shaxriyor");
  };

  return (
    <>
      <h1>Date name pess : {count}</h1>
      <button onClick={clik}>Date click</button>
      {event.map((events) => {
        return (
          <div key={event.id}>
            <h1>{events.title}</h1>
          </div>
        );
      })}
    </>
  );
}

export default App;
