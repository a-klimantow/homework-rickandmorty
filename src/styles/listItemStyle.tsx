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
    font-weight: 300;

    &:empty {
      background-color: #dadada;
      cursor: initial;
      &::before {
        content: attr(data-name);
        font-size: 24px;
        font-weight: 300;
        line-height: 24px;
        position: absolute;
        bottom: 14px;
        color: #fff;
      }
    }

    &.load {
      align-items: center;
      width: 100%;
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
