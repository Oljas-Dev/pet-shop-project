import styled from "styled-components";
import { StyledH2 } from "../../styles/commonStyles";

import DogsPicture from "./../../assets/dogs_form_image.png";
import { Button, Flex } from "antd";

const FormContainer = styled.article`
  background: linear-gradient(rgba(36, 81, 198, 1), rgba(13, 80, 255, 1));
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  color: #fff;

  margin: 0 40px;
  padding: 32px;
  border-radius: 12px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;

  width: 100%;
`;

const Input = styled.input`
  background-color: transparent;
  font-size: 20px;
  color: inherit;
  padding: 16px 32px;
  border: 1px solid #fff;

  border-radius: 6px;

  &::placeholder {
    color: #fff;
  }
`;

const StyledFormImage = styled.img`
  width: 65%;
`;

const StyledButton = styled(Button)`
  padding: 16px 32px;
`;

function MainPageForm() {
  return (
    <FormContainer>
      <StyledH2>5% off on the first order</StyledH2>
      <Flex gap={32}>
        <StyledFormImage src={DogsPicture} alt="Picture with dogs" />
        <StyledForm>
          <Flex gap={16} vertical>
            <Input id="name" type="text" placeholder="Name" />
            <Input id="phone" type="text" placeholder="Phone number" />
            <Input id="email" type="text" placeholder="Email" />
          </Flex>

          <StyledButton>Get a discount</StyledButton>
        </StyledForm>
      </Flex>
    </FormContainer>
  );
}

export default MainPageForm;
