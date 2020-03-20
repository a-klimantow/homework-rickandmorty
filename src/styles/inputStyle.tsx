import { css } from "styled-components";

export const inputStyle = css`
  input {
    margin: 15px;
    width: 100%;
    max-width: 810px;
    min-height: 80px;
    font: inherit;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
    padding: 0 27px;
    outline: none;
    border: 1px solid #a0a0a0;
    box-sizing: border-box;
    transition: border-color 200ms ease-in-out, box-shadow 300ms ease-in-out;
  }

  input:hover,
  input:focus {
    border-color: blueviolet;
  }

  input:focus {
    box-shadow: 0 0 4px blueviolet;
  }
`;
