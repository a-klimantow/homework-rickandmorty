type ItemListType = {
  id: string;
  image: string;
  name: string;
};

export type AppStateType = {
  data:
    | {
        results: Array<ItemListType>;
      }
    | undefined;
  value: string;
};

export type ActionType =
  | { type: "CHANGE_INPUT"; payload: string }
  | { type: "INITIAL_STATE"; payload: any };

export type useInputType = {
  bind: {
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
};

export type useClickAntPressType = {
  click: (e: React.MouseEvent<HTMLUListElement, MouseEvent>) => void;
  press: (e: any) => void;
};
