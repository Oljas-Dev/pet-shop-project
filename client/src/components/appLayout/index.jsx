import styled from "styled-components";
import Footer from "../footer";
import Nav from "../nav";
import { Outlet } from "react-router-dom";
import { StyledFlexCol } from "../../styles/commonStyles";

const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AppCentering = styled.div`
  max-width: 1440px;
`;

function Applayout() {
  return (
    <StyledMain>
      <AppCentering>
        <StyledFlexCol $justify="space-between" $minHeight="100vh">
          <Nav />
          <Outlet />
          <Footer />
        </StyledFlexCol>
      </AppCentering>
    </StyledMain>
  );
}

export default Applayout;
