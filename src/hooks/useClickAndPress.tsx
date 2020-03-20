import { useClickAntPressType } from "types";

export function useClickAndPress(): useClickAntPressType {
  const click = (e: React.BaseSyntheticEvent): void => {
    if (e.target.type === "button") {
      e.stopPropagation();
      console.log("button");
    }
    if (e.target.alt) {
      console.log(e.target.alt);
    }
  };

  const press = (e: any): void => {
    if (e.key === " " && !e.target.type) {
      e.preventDefault();
      console.log("press");
    }
  };

  return { click, press };
}
