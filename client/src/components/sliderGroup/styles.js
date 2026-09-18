import { Button } from "antd";
import { StyledH2 } from "../../styles/commonStyles";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import styled from "styled-components";

export const StyledSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  width: 100%;
  padding: 0 40px;
  overflow: hidden;
`;

export const StyledSliderHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledCarousel = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;
`;

export const CarouselContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const SliderH2 = styled(StyledH2)`
  margin-right: 32px;
`;

export const StyledButton = styled(Button)`
  font-size: 16px;
  color: rgba(139, 139, 139, 1);
`;

export const GrayDivider = styled.hr`
  border-top: 1px solid rgba(221, 221, 221, 1);
  flex-grow: 1;
`;

export const StyledLeftArrow = styled(LeftOutlined)`
  cursor: pointer;
  font-size: 20px;
  opacity: ${({ $disabled }) => ($disabled ? "0.2" : "1")};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? "0.2" : "0.5")};
  }
`;

export const StyledRightArrow = styled(RightOutlined)`
  cursor: pointer;
  font-size: 20px;
  opacity: ${({ $disabled }) => ($disabled ? "0.2" : "1")};

  &:hover {
    opacity: ${({ $disabled }) => ($disabled ? "0.2" : "0.5")};
  }
`;
