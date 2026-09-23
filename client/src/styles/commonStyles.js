import { Button } from "antd";
import styled from "styled-components";

export const StyledH1 = styled.h1`
  font-size: 96px;
  font-weight: 700;

  color: ${({ $color }) => $color || "inherit"};
`;

export const StyledH2 = styled.h2`
  font-size: 64px;
  font-weight: 700;
`;

export const StyledH3 = styled.h2`
  font-size: 40px;
  font-weight: 700;
`;

export const StyledFlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${({ $justify }) => $justify || "initial"};
  gap: ${({ $gap }) => $gap || "0"};
  min-height: ${({ $minHeight }) => $minHeight || "auto"};
`;

export const StyledButton = styled(Button)`
  padding: 16px 56px;
  width: fit-content;
`;
