import { CloseOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 65% 32%;
  gap: 32px;
  margin-top: 40px;
  margin-bottom: 80px;
`;
export const CartItemsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 12px;
  overflow: hidden;
`;

export const CartImage = styled.img`
  width: 200px;
  border-right: 1px solid rgba(221, 221, 221, 1);
`;

export const CartContent = styled(Flex)`
  flex: 1;
  min-width: 0;
  padding: 32px;
`;

export const Subheading = styled(Flex)`
  width: 100%;
  flex: 1;
  align-self: stretch;
`;

export const CloseIcon = styled(CloseOutlined)`
  cursor: pointer;
`;
