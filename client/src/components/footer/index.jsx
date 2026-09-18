import styled from "styled-components";
import { StyledFlexCol, StyledH2 } from "../../styles/commonStyles";
import ContactCards from "../contactCards";
import ContactMap from "../contactMap";

const StyledFooter = styled.footer`
  padding: 0 40px 80px;
`;

function Footer() {
  return (
    <StyledFooter>
      <StyledFlexCol $gap="32px">
        <StyledH2>Contact</StyledH2>
        <ContactCards />
        <ContactMap />
      </StyledFlexCol>
    </StyledFooter>
  );
}

export default Footer;
