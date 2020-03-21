import { useClickType, ActionType } from "types";

export function useClick(
  dispatch: React.Dispatch<ActionType>
): useClickType {
  const click = (e: any): void => {
    if (e.target.type === "button") {
      e.stopPropagation();
      dispatch({ type: "ADD_IGNORED_ID", payload: e.target.dataset });
    }
    if (e.target.alt) {
      const name = e.target.alt;
      const src = e.target.src;
      if (name.toLowerCase().includes("rick")) {
        dispatch({ type: "ADD_PARTY", payload: { rick: src } });
      }
      if (name.toLowerCase().includes("morty")) {
        dispatch({ type: "ADD_PARTY", payload: { morty: src } });
      }
    }
  };

  return { click };
}
