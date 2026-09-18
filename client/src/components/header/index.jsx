import styled from "styled-components";
import {
  StyledButton,
  StyledFlexCol,
  StyledH1,
} from "../../styles/commonStyles";

import heroImage from "./../../assets/hero.png";
import { useNavigate } from "react-router-dom";

const StyledHeader = styled.header`
  height: 600px;
  background-image: url(${heroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 80px 40px;
`;

function Header() {
  const navigate = useNavigate();

  return (
    <StyledHeader>
      <StyledFlexCol $gap="40px">
        <StyledH1 $color="white">Amazing Discounts on Pets Products!</StyledH1>
        <StyledButton type="primary" onClick={() => navigate("/cart")}>
          Check out
        </StyledButton>
      </StyledFlexCol>
    </StyledHeader>
  );
}

export default Header;
