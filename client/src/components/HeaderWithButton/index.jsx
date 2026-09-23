import { useNavigate } from "react-router-dom";
import {
  GrayDivider,
  SliderH2,
  StyledButton,
  StyledSliderHeader,
} from "./../sliderGroup/styles";

function HeaderWithButton({ headerObj }) {
  const navigate = useNavigate();
  return (
    <StyledSliderHeader>
      <SliderH2>{headerObj.title}</SliderH2>
      <GrayDivider />
      <StyledButton onClick={() => navigate(headerObj.href)}>
        {headerObj.btnText}
      </StyledButton>
    </StyledSliderHeader>
  );
}

export default HeaderWithButton;
