import { css } from "styled-components";

export const listItemStyle = css`
  li {
    outline: none;
    width: 180px;
    height: 200px;
    overflow: hidden;
    margin: 15px;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: box-shadow 300ms ease-in-out;
    &:hover,
    &:focus {
      box-shadow: 0 0 4px blueviolet;
    }
    &:active {
      box-shadow: 0 0 6px blueviolet;
    }
  }

  li > img {
    height: 100%;
    width: auto;
  }

  li button {
    width: 30px;
    height: 30px;
    border: 1px solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 8px;
    right: 8px;
    outline: none;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
    & > * {
      pointer-events: none;
    }

    &:hover,
    &:focus {
      color: blueviolet;
      border-color: blueviolet;
    }

    &:active {
      color: inherit;
      background-color: blueviolet;
    }
  }
`;
