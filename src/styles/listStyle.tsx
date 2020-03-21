import { css } from "styled-components";

export const listStyle = css`
  ul {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: relative;
    min-height: 100px;
  }
  ul:empty {
    min-height: 230px;
  }

  ul:empty::before,
  ul:empty::after {
    content: "empty";
    position: absolute;
    align-self: center;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
  }
`;
