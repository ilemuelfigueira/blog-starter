import styled from "styled-components";

export const Input = styled.input`
  border: 0;

  background: transparent;

  font-size: 1em;

  color: ${({theme}) => theme["white"]};
  font-weight: 600;

  width: 100%;
  

  &:focus {
    outline: 0;
  }

  &::placeholder {
    color: ${({theme}) => theme["white"]};
    opacity: 0.5;
    font-weight: 500;
  }
`

export const Container = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  width: 100%;

  height: 2em;

  margin: 0;
  padding: 1.5em 1em;

  gap: 0.7em;

  border-radius: 5px;

  background: rgba(255, 255, 255, 0.2);

  button {
    border: 0;
    background: transparent;


    padding: 0;
    margin: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:active {
      transform: scale(0.9);
    }

    transition: all 0.05s ease-in-out;
  }

  svg {
    width: 2em;
    height: 2em;
  }

  svg path {
    fill: ${({theme}) => theme["white"]};
  }
`