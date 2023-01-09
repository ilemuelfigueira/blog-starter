import styled from "styled-components";

export const Container = styled.div`
  width: 900px;
  max-width: 80vw;

  background-color: #FFF;

  padding: 1.5em;
  border-radius: 5px;

  display: flex;
  
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  strong {
    color: ${({ theme }) => theme["gray"]};
    font-size: 0.6em;
  }

  h2 {
    color: ${({ theme }) => theme["gray-dark"]};
    font-size: 1.1em;
  }

  img {
    width: 21px;
    height: 19px;
  }

  p {
    font-size: 0.75em;
    color: ${({ theme }) => theme["gray"]};
  }
`;

export const Header = styled.header`
  display: flex;

  width: 100%;
  
  justify-content: space-between;
  text-align: center;
`;
