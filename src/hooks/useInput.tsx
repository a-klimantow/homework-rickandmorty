import { ActionType, useInputType } from "types";

export function useInput(
  value: string,
  dispatch: React.Dispatch<ActionType>
): useInputType {
  const change = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch({ type: "CHANGE_INPUT", payload: e.target.value });
  };
  return {
    bind: {
      placeholder: "enter name",
      type: "text",
      onChange: change,
      value
    }
  };
}
