import React from "react";
import styled from "styled-components";

export const CardList = ({ children, loading }: any) => {
  return <CardListStyled>{loading || children}</CardListStyled>;
};

const CardListStyled = styled.ul`
  padding: 0;
  margin-top: 15px;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 850px;
  position: relative;

  & > * {
    margin: 15px;
  }
  @keyframes loader {
    from {
      content: "loading.";
    }
    50% {
      content: "loading..";
    }
    to {
      content: "loading...";
    }
  }
  &:empty {
    min-height: 100px;
    width: 100%;
    &::before {
      content: "loading";
      position: absolute;
      width: 100px;
      height: 100px;
      animation: loader 1000ms linear infinite;
    }
  }
`;
