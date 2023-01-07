import styled from "styled-components";
import { Label } from "./components/Label/index.styled";
import { SearchBar } from "./components/SearchBar";

const Container = styled.header`
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  background: ${({ theme }) => theme["gradient-default"]};

  .content {
    display: flex;

    height: 100%;
    max-width: 80vw;
    width: 900px;

    flex-direction: column;

    align-items: center;
    justify-content: space-around;

    flex-wrap: nowrap;

    overflow: hidden;

  }

  .labels {
    display: flex;

    max-width: 80vw;
    width: 100%;

    align-items: center;
    justify-content: space-between;
  }
`

export const Header = () => {
  return (
    <Container>
      <div className="content">
        <div className="labels">
          <Label>Codelândia</Label>
          <Label>blog</Label>
        </div>
        <SearchBar />
      </div>
    </Container>
  )
}