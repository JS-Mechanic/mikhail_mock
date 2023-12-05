import { FC, useEffect, useState } from "react";
import Counter from "./Counter";

import "./App.css";

export const App: FC<{ name: string }> = ({ name }) => {
  const [initialCounterValue, setInitialCounterValue] = useState<
    number | undefined
  >();

  useEffect(() => {
    const i = setTimeout(() => {
      setInitialCounterValue(0);
      console.log(initialCounterValue);
      clearTimeout(j);
    }, 100);

    const j = setTimeout(() => {
      setInitialCounterValue(20);
      console.log(initialCounterValue);
      clearTimeout(i);
    }, 500);
  }, [initialCounterValue]);

  return (
    <div>
      <h3>{name}</h3>
      <Counter
        initialCounterValue={initialCounterValue}
        onUpdate={setInitialCounterValue}
      />
    </div>
  );
};
