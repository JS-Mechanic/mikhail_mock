import { useEffect, useState } from "react";

// hasResetButton is not mandatory
// initialCounterValue is not mandatory
// onUpdate is not mandatory
interface ICounter {
  hasResetButton?: boolean;
  initialCounterValue?: number;
  onUpdate?: () => void;
}

// 1) Fix all syntax and logical errors in code
// 2) Finish disable, decrease and increase buttons logic
// Conditions:
// 		- Decrease button is disabled when counter equals to 0 or less
// 		- Increase button is disabled when counter equals to 10 or more
// 3) Should have possibility to set initial value correctly
// 		- Can be passed asynchronously
// 		- Can receive 2 different values, so we should ignore the rest except the first one
// 4) Write logic for Reset button
// 		- Should be hidden or visible based on prop that is coming from parent component
// 		- By default should be disabled and enabled only after 10 seconds
// 		- If Decrease or Increase button clicked it become disabled and started to count 10 seconds to enable it

const Counter = ({
  hasResetButton = false,
  initialCounterValue = 0,
  onUpdate,
}: ICounter) => {
  const [counter, setCounter] = useState(initialCounterValue);
  const [resetButtonVisibility, setResetButtonVisibility] =
    useState(hasResetButton);

  const disableDecrease = counter <= 0;
  const disableIncrease = counter >= 10;

  const handleUpdate = (action: string) => {
    if (action === "increase") setCounter((prev) => prev + 1);
    else if (action === "decrease") setCounter((prev) => prev - 1);
  };

  useEffect(() => {
    const i = setTimeout(() => {
      setResetButtonVisibility(true);
    }, 10000);
    return () => {
      clearTimeout(i);
      setResetButtonVisibility(false);
    };
  }, [counter]);

  const handleReset = () => {
    if (counter !== 0) setCounter(0);
  };

  return (
    <>
      <div style={{ backgroundColor: "green" }}>counter: {counter}</div>
      <button
        disabled={disableDecrease}
        className="cool-button"
        onClick={() => handleUpdate("decrease")}
      >
        Decrease
      </button>
      <button
        disabled={disableIncrease}
        className="cool-button"
        onClick={() => handleUpdate("increase")}
      >
        Increase
      </button>
      <button disabled={!resetButtonVisibility} onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default Counter;
