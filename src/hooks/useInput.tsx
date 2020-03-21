import { useEffect, useState } from "react";
import { ActionType, useInputType } from "types";

export function useInput(dispatch: React.Dispatch<ActionType>): useInputType {
  const [value, setValue] = useState<string>("");

  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(
      () =>
        value.length > 2 && dispatch({ type: "ADD_FILTER", payload: value }),
      300
    );
    return () => clearTimeout(timer);
  }, [value]);

  return {
    inputProps: {
      placeholder: "enter name",
      type: "text",
      onChange: change,
      value
    }
  };
}
