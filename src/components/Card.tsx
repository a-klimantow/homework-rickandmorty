import React from "react";
// import styled from "styled-components";

// import { ReactComponent as Icon } from "assets/close.svg";
// // import { useAppState } from "hooks";

// export const Card = ({ id, name, image }: any) => {
//   const { dispatch }: any = useAppState();
//   const handleClick = (e: any) => {
//     if (e.target.type) {
//       dispatch({ type: "ADD_IGNORED_ID", payload: { id } });
//     } else {
//       console.log(1);
//     }
//   };

//   return (
//     <CardWrap onClick={handleClick}>
//       <img src={image} alt="image" />
//       <button type="button">
//         <Icon />
//       </button>
//     </CardWrap>
//   );
// };

// const CardWrap = styled.li`
//   width: 180px;
//   height: 220px;
//   overflow: hidden;
//   position: relative;
//   cursor: pointer;

//   img {
//     width: auto;
//     height: 100%;
//   }

//   button {
//     cursor: pointer;
//     outline: none;
//     padding: none;
//     position: absolute;
//     top: 8px;
//     right: 8px;
//     border-radius: 50%;
//     border: 1px solid #a0a0a0;
//     background-color: #a0a0a0;
//     width: 30px;
//     height: 30px;
//     display: inline-flex;
//     justify-content: center;
//     align-items: center;
//     transition-property: color, border-color, background-color;
//     transition-timing-function: ease-in;
//     transition-duration: 200ms;

//     * {
//       pointer-events: none;
//     }

//     &:hover,
//     &:focus {
//       color: blueviolet;
//       border-color: blueviolet;
//     }

//     &:active {
//       background-color: blueviolet;
//       color: inherit;
//     }
//   }
// `;
