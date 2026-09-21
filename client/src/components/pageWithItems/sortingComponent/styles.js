import styled from "styled-components";

export const StyledSortComponent = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  gap: 40px;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const PriceInput = styled.input`
  width: 112px;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  padding: 8px 16px;

  placeholder {
    color: rgba(221, 221, 221, 1);
  }
`;

export const CheckboxWrapper = styled.label`
  position: relative;
  display: inline-flex;
  width: 36px;
  height: 36px;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 100%;
  height: 100%;
  margin: 0;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  cursor: pointer;

  &:checked {
    background-color: #2451c6;
    border-color: #2451c6;
  }

  &:checked + span::after {
    content: "";
    position: absolute;
    width: 8px;
    height: 14px;
    border-right: 2px solid white;
    border-bottom: 2px solid white;
    transform: rotate(45deg);
    top: 8px;
    left: 13px;
  }
`;

export const Checkmark = styled.span`
  pointer-events: none;
`;

export const Select = styled.select`
  font-size: 16px;
  font-weight: 500;
  border: 1px solid rgba(221, 221, 221, 1);
  border-radius: 6px;
  padding: 8px 16px;
`;
