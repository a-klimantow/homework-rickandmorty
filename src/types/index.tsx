type ItemListType = {
  id: string;
  image: string;
  name: string;
};

export type AppStateType = {
  items: Array<ItemListType>;
  loading: boolean;
  ingnoreIds: Array<string>;
  filter: string;
  party: { rick: string | null; morty: string | null };
};

export type ActionType =
  | { type: "GET_DATE"; payload: Array<ItemListType> }
  | { type: "ADD_IGNORED_ID"; payload: { id: string } }
  | { type: "ADD_PARTY"; payload: { rick: string } | { morty: string } }
  | { type: "ADD_FILTER"; payload: string };

export type useInputType = {
  inputProps: {
    placeholder: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string;
  };
};

export type useClickType = {
  click: (e: any) => void;
};
