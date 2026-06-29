import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [dateCount, setDateCount] = useState(0);

  const today = new Date();
  const newDate = new Date();
  newDate.setDate(today.getDate() + dateCount);

  function handleReset() {
    setStep(1);
    setDateCount(0);
  }

  function subtractCount() {
    setDateCount((c) => c - step);
  }

  function addDateCount() {
    setDateCount((s) => s + step);
  }

  return (
    <div className="counter">
      <div className="slider-wrapper">
        <input
          className="slider"
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <p>{step}</p>
      </div>

      <div>
        <div className="step-counter" value={dateCount}>
          <button onClick={subtractCount}>-</button>
          <input
            type="text"
            value={dateCount}
            onChange={(e) => setDateCount(Number(e.target.value))}
          ></input>
          <button onClick={addDateCount}>+</button>
        </div>
      </div>

      <div className="date-message">
        <p>
          <span>
            {dateCount === 0
              ? "Today is "
              : dateCount === 1
                ? `${dateCount} day from today is `
                : dateCount > 1
                  ? `${dateCount} days from today is `
                  : dateCount === -1
                    ? `${Math.abs(dateCount)} day ago was `
                    : `${Math.abs(dateCount)} days ago was `}
          </span>
          <span>{newDate.toDateString()}</span>
        </p>
      </div>
      {dateCount !== 0 || step !== 1 ? (
        <div className="button-container">
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
      {/* {(dateCount !== 0 || step !== 1) && (
        <div className="button-container">
          <button onClick={handleReset}>Reset</button>
        </div>
      )} */}
    </div>
  );
}
