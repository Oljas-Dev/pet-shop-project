import styled from "styled-components";

const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
  background-color: rgba(13, 80, 255, 1);
  border-radius: 50%;
  width: 26px;
  height: 26px;

  position: absolute;
  top: 5px;
`;

function CartTag({ children }) {
  return <Tag>{children}</Tag>;
}

export default CartTag;
