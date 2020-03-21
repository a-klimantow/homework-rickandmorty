import React, { useReducer } from "react";
import styled from "styled-components";
import { inputStyle, listStyle, listItemStyle } from "styles";
import { ReactComponent as Icon } from "assets/close.svg";
import { useClick, useInput, useFetch } from "hooks";
import { AppStateType, ActionType } from "types";
import { data } from "data";

const initialState: AppStateType = {
  items: [],
  ingnoreIds: [],
  loading: true,
  party: { rick: null, morty: null },
  filter: ""
};

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { click } = useClick(dispatch);
  const { inputProps } = useInput(dispatch);
  useFetch(state, dispatch);

  const { ingnoreIds, party, items, loading } = state;
  return (
    <AppContainer>
      <input {...inputProps} />

      {/* loader */}

      {/* card list */}
      <ul data-loading={loading} onClick={click}>
        {loading && <li className="load">loading</li>}
        {items
          .filter((item: any) => !ingnoreIds.includes(item.id))
          .map((item: any) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <button data-id={item.id} type="button">
                <Icon />
              </button>
            </li>
          ))}
      </ul>

      {/* party */}
      <h3>party</h3>
      <ul>
        <li data-name="rick">
          {party.rick && <img src={party.rick} alt="Rick" />}
        </li>
        <li data-name="morty">
          {party.morty && <img src={party.morty} alt="Morty" />}
        </li>
      </ul>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-transform: uppercase;
  font-size: 30px;

  ${inputStyle}
  ${listStyle}
  ${listItemStyle}
`;

function reducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case "GET_DATE":
      return { ...state, items: action.payload };
    case "ADD_IGNORED_ID":
      const { ingnoreIds } = state;
      const { id } = action.payload;
      return {
        ...state,
        ingnoreIds: !ingnoreIds.includes(id)
          ? ingnoreIds.concat(id)
          : ingnoreIds
      };
    case "ADD_PARTY":
      return { ...state, party: { ...state.party, ...action.payload } };
    case "ADD_FILTER":
      return { ...state, filter: action.payload };
    default:
      return state;
  }
}
