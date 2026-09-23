import styled from "styled-components";
import { Flex } from "antd";

import logo from "./../../assets/icons/logo.svg";
import cart from "./../../assets/icons/basket_empty.svg";
import { Link, NavLink } from "react-router-dom";
import CartTag from "../cartTag";
import { useSelector } from "react-redux";

const StyledNav = styled.nav`
  font-weight: 500;
  font-size: 20px;
  padding: 30px 40px;
`;

const StyledLink = styled(NavLink)`
  color: #000;
`;

const Cart = styled(Link)`
  position: relative;
`;

function Nav() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <StyledNav>
      <Flex justify="space-between" align="center" component="nav">
        <Link to="/">
          <img src={logo} alt="website logo" />
        </Link>

        <Flex gap={32} component="ul">
          <StyledLink to="/">Main Page</StyledLink>
          <StyledLink to="/categories">Categories</StyledLink>
          <StyledLink to="/products">All Products</StyledLink>
          <StyledLink to="/all-sales">All Sales</StyledLink>
        </Flex>

        <Cart to="/cart">
          <img src={cart} alt="website logo" />
          {cartItems.length > 0 && <CartTag>{cartItems.length}</CartTag>}
        </Cart>
      </Flex>
    </StyledNav>
  );
}

export default Nav;
