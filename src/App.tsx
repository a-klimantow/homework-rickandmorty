import React, { useReducer } from "react";
import styled from "styled-components";
import { inputStyle, listStyle, listItemStyle } from "styles";
import { ReactComponent as Icon } from "assets/close.svg";
import { useClickAndPress, useInput, useFetch } from "hooks";
import { AppStateType, ActionType } from "types";
import { data } from "data";

const initialState: AppStateType = {
  data: undefined,
  value: ""
};

export const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { click, press } = useClickAndPress();
  const { bind } = useInput(state.value, dispatch);
  useFetch(state, dispatch);
  console.log(state);

  return (
    <AppContainer>
      <input {...bind} />
      <ul data-loading={false} onClick={click}>
        {state.data && state.data.results.map(item => (
          <li key={item.id} tabIndex={0} onKeyPress={press}>
            <img src={item.image} alt={item.name} />
            <button type="button">
              <Icon />
            </button>
          </li>
        ))}
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

  ${inputStyle}
  ${listStyle}
  ${listItemStyle}
`;

function reducer(state: AppStateType, action: ActionType): AppStateType {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, value: action.payload };
    case "INITIAL_STATE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
