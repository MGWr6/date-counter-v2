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
  const [dateCount, setDateCount] = useState(step);

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + dateCount);

  function subtractStep() {
    if (step > 1) setStep((s) => s - 1);
  }

  function addStep() {
    setStep((s) => s + 1);
  }

  function substractCount() {
    if (dateCount >= 1) setDateCount((c) => c - step);
  }

  function addDateCount() {
    setDateCount((s) => s + step);
  }

  return (
    <div className="counter">
      <div>
        <div className="step-counter">
          <button onClick={subtractStep}>-</button>
          <p>Step: {step}</p>
          <button onClick={addStep}>+</button>
        </div>
      </div>

      <div>
        <div className="step-counter">
          <button onClick={substractCount}>-</button>
          <p>Count: {dateCount}</p>
          <button onClick={addDateCount}>+</button>
        </div>
      </div>

      <div className="date-message">
        <p>
          {dateCount >= 1
            ? `${dateCount} days from today is ${futureDate.toDateString()}`
            : `Today is ${futureDate.toDateString()}`}
        </p>
      </div>
    </div>
  );
}

//Pseudocode
//Creating a step counter:
// 3 components
// 1. Step counter with + and - button
// should increment by one
// 2. Count counter with + and - button
// should increment by the number set with the Step counter. (i.e. if 2, then Count increments by 2, if 5, then count increments by 5, etc...)
// 3. Message component with {state} days from today is x number of days based on the counter
// look up javascript how to add days to date
