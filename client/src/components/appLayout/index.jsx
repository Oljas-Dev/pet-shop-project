import styled from "styled-components";
import Footer from "../footer";
import Nav from "../nav";
import { Outlet } from "react-router-dom";
import { StyledFlexCol } from "../../styles/commonStyles";

const StyledMain = styled.main``;

function Applayout() {
  return (
    <StyledMain>
      <StyledFlexCol $justify="space-between" $minHeight="100vh">
        <Nav />
        <Outlet />
        <Footer />
      </StyledFlexCol>
    </StyledMain>
  );
}

export default Applayout;
