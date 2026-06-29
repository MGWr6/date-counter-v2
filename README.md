## What I Learned

This is a coding challenge I tackled in my course and was able to successfully reach the desired outcome for full functionality.

In this challenge, I built a simple date counter application using React state. The app allows the user to increase or decrease a `step` value, then use that step value to update a separate count. The count is then used to calculate a date either in the future or in the past.

Through this project, I practiced using the `useState` hook to manage multiple pieces of state inside a component. The `step` state controls how much the count should increase or decrease, while the `dateCount` state keeps track of how many days away from today the displayed date should be.

I also practiced using callback functions when updating state, such as:

```js
setStep((s) => s + 1);
setDateCount((c) => c - step);
```

This helped reinforce the pattern of updating state based on the current state value.

Another key part of this challenge was working with JavaScript dates. I used the `Date` object to get today’s date, then used `setDate()` and `getDate()` to add or subtract days based on the current count.

```js
const today = new Date();
const newDate = new Date();
newDate.setDate(today.getDate() + dateCount);
```

I also used `.toDateString()` to format the final date in a readable format.

Finally, I practiced conditional rendering in JSX using a nested ternary expression. Though it is a little messy, I found it useful for this scenario - it allowed the message to change depending on whether the selected date was today, in the future, or in the past. I also used `Math.abs()` to remove the negative sign when displaying past dates, so the message would say `1 day ago` instead of `-1 day ago`.

Overall, this challenge helped me better understand how React state, event handlers, conditional rendering, and basic JavaScript date logic can work together to create an interactive user interface.

## Edit 06/29/2026

I refactored this project with updated challenge parameters. Instead of using `-` and `+` buttons to control both pieces of state, the `step` value is now controlled by a range slider, and the `dateCount` value is controlled by a text input.

The `step` state is still responsible for determining how much the count should increase or decrease when the buttons are clicked, but the user now adjusts that value with an HTML range input:

```jsx
<input
  className="slider"
  type="range"
  min="0"
  max="10"
  value={step}
  onChange={(e) => setStep(Number(e.target.value))}
/>
```

This helped reinforce how controlled form elements work in React. The slider does not increment or decrement state like a button does. Instead, it gives React the current value of the input, and React updates state based on that exact value.

I also updated the date count to use an input element:

```jsx
<input
  type="text"
  value={dateCount}
  onChange={(e) => setDateCount(Number(e.target.value))}
/>
```

This allowed the `dateCount` state to be updated directly by the user while still allowing the `-` and `+` buttons to update the same state based on the current `step` value.

Another addition was a reset button that only appears when the app is no longer in its default state. If `dateCount` is not `0` or `step` is not `1`, the reset button is displayed. Otherwise, it remains hidden.

```jsx
{
  dateCount !== 0 || step !== 1 ? (
    <div className="button-container">
      <button onClick={handleReset}>Reset</button>
    </div>
  ) : null;
}
```

This could also be written using short-circuiting:

```jsx
{
  (dateCount !== 0 || step !== 1) && (
    <div className="button-container">
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

The reset functionality restores both pieces of state to their original values:

```js
function handleReset() {
  setStep(1);
  setDateCount(0);
}
```

This refactor helped me better understand the difference between button-driven state updates and input-driven state updates. Buttons usually update state relative to the previous value, while inputs usually update state to match the exact value entered or selected by the user.
