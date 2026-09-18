import styled from "styled-components";

export const StyledCategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  border: ${({ $border }) =>
    $border ? "1px solid rgba(221, 221, 221, 1)" : ""};
  border-radius: 12px;
  overflow: hidden;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: ${({ $radius }) => $radius};
  border-bottom: ${({ $border }) =>
    $border ? "1px solid rgba(221, 221, 221, 1)" : ""};
`;

export const TitleAndPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 32px;
`;

export const PriceContainer = styled.span`
  display: flex;
  align-items: end;
  gap: 16px;
`;

export const SalePrice = styled.h3`
  font-size: 40px;
  font-weight: 600;
`;

export const OldPrice = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: rgba(139, 139, 139, 1);
  text-decoration: line-through;
  padding-bottom: 5px;
`;

export const DiscountTag = styled.div`
  background-color: rgba(13, 80, 255, 1);
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  padding: 4px 8px;
  position: absolute;
  top: 16px;
  right: 16px;

  border-radius: 6px;
`;
