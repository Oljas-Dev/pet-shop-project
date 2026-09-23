import styled from "styled-components";
import { StyledH2 } from "../../styles/commonStyles";

import DogsPicture from "./../../assets/dogs_form_image.png";
import { Flex } from "antd";
import axios from "axios";
import { useForm } from "react-hook-form";
import Inputs from "./inputs";

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

const StyledFormImage = styled.img`
  width: 65%;
`;

const StyledButton = styled.button`
  background-color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: 600;
  padding: 16px 32px;
  border: none;
  border-radius: 6px;

  cursor: pointer;

  &:hover {
    background-color: rgb(221, 218, 218);
  }
`;

function MainPageForm() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);

    axios
      .post("http://localhost:3333/order/send", {
        name: data.name,
        phone: data.phone,
        email: data.email,
      })
      .then(() => {
        alert("Success");
      })
      .catch((error) => {
        console.error("There was an error placing an order", error);
      });
    reset();
  }

  return (
    <FormContainer>
      <StyledH2>5% off on the first order</StyledH2>
      <Flex gap={32}>
        <StyledFormImage src={DogsPicture} alt="Picture with dogs" />
        <StyledForm
          onSubmit={handleSubmit(onSubmit, (errors) =>
            console.log("Validation errors:", errors),
          )}
        >
          <Inputs register={register} errors={errors} />

          <StyledButton type="submit">Get a discount</StyledButton>
        </StyledForm>
      </Flex>
    </FormContainer>
  );
}

export default MainPageForm;
