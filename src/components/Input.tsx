import styled from "styled-components";

export const Input = styled.input.attrs({
  type: "text",
  placeholder: "Enter name"
})`
  outline: none;
  border: 1px solid #a0a0a0;
  font: inherit;
  font-size: 30px;
  font-weight: 300;
  line-height: 35px;
  max-width: 810px;
  width: 100%;
  min-height: 80px;
  padding: 0 27px;
  text-transform: uppercase;
  transition-property: border-color, box-shadow;
  transition-duration: 200ms, 300ms;
  transition-timing-function: ease-in;

  &:hover, &:focus {
    border-color: blueviolet;
  }

  &:focus {
    box-shadow: 0 0 3px blueviolet;
  }
`;
