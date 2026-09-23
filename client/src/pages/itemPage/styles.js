import { Button } from "antd";
import styled from "styled-components";

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  justify-content: center;
`;

export const StyledItemImage = styled.img`
  max-width: 550px;
`;

export const PriceContainer = styled.span`
  display: flex;
  align-items: end;
  gap: 32px;
`;

export const PriceTag = styled.p`
  font-size: 64px;
  font-weight: 700;
`;

export const OldPriceTag = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: rgba(139, 139, 139, 1);
  text-decoration: line-through;
  position: relative;
`;

export const StyledButton = styled(Button)`
  background: rgba(13, 80, 255, 1);
  font-size: 20px;
  flex-grow: 1;
  height: 100%;
`;

export const DescriptionSubheading = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const DescriptionParagraph = styled.p`
  font-size: 16px;
  font-weight: 400;
`;

export const ReadBtn = styled.button`
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  border: none;
  outline: none;
  cursor: pointer;

  align-self: start;
`;
