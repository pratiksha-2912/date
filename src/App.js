// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <DateCounter />
    </div>
  );
}

function DateCounter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function handleRest() {
    setCount(0);
    setStep(1);
  }
  const date = new Date();
  date.setDate = date.getDate() + count;
  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>step:{step}</span>
      </div>
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <input
        type="text"
        value={count}
        onChange={(e) => setCount(Number(e.target.value))}
      />
      <button onClick={() => setCount((c) => c + step)}>+</button>

      <div>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was`}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {count !== 0 || step !== 1 ? (
        <div>
          <button onClick={handleRest}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}
