import styled from "styled-components";
import Header from "../Header/Header";

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1200px;

  & h1 {
    color: white;
    display: flex;
    justify-content: center;
  }
`;

const Layout = (): JSX.Element => {
  return (
    <StyledContainer>
      <Header />
    </StyledContainer>
  );
};

export default Layout;
