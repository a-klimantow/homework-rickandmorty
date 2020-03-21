import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { AppStateType, ActionType } from "types";

const setGql = (filter: string) => gql`
  {
    characters(filter: { name: "${filter}" }) {
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
): any {
  const { filter } = state;
  const { data, loading, error } = useQuery(setGql(filter));
  console.log(data)
  useEffect(() => {
    
    if (data && data.characters.results) {
      dispatch({ type: "GET_DATE", payload: data.characters.results });
    }
    console.log(1);
  }, [data]);
}
