import styled from "styled-components";
import { Flex } from "antd";

import logo from "./../../assets/icons/logo.svg";
import cart from "./../../assets/icons/basket_empty.svg";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  font-weight: 500;
  font-size: 20px;
  padding: 30px 40px;
`;

const StyledLink = styled(NavLink)`
  color: #000;
`;

function Nav() {
  return (
    <StyledNav>
      <Flex justify="space-between" align="center" component="nav">
        <img src={logo} alt="website logo" />

        <Flex gap={32} component="ul">
          <StyledLink to="/">Main Page</StyledLink>
          <StyledLink to="/categories">Categories</StyledLink>
          <StyledLink to="all-products">All Products</StyledLink>
          <StyledLink to="/all-sales">All Sales</StyledLink>
        </Flex>

        <img src={cart} alt="website logo" />
      </Flex>
    </StyledNav>
  );
}

export default Nav;
