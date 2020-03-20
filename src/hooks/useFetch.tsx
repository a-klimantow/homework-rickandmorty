import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppStateType, ActionType } from "types";

const R = gql`
  {
    characters {
      info {
        next
      }
      results {
        name
        id
        image
      }
    }
  }
`;

export function useFetch(
  state: AppStateType,
  dispatch: React.Dispatch<ActionType>
): void {
  const initialState = useQuery(R);
  const { data, loading, error } = initialState;
  useEffect(() => {
    dispatch({
      type: "INITIAL_STATE",
      payload: { loading, error, data: data && data.characters }
    });
  }, [initialState]);
}
