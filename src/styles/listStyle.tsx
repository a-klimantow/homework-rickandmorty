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

  ul:empty::before,
  ul:empty::after {
    content: "Not found";
    position: absolute;
    align-self: center;
    font-size: 30px;
    font-weight: 300;
    text-transform: uppercase;
  }

  @keyframes loading {
    0% {
      content: ".";
    }

    50% {
      content: ". .";
    }
    to {
      content: ". . .";
    }
  }

  ul[data-loading="true"]:empty::before {
    content: "loading";
    right: 51%;
  }

  ul[data-loading="true"]:empty::after {
    animation: loading 1000ms infinite linear;
    left: 50%;
  }
`;
