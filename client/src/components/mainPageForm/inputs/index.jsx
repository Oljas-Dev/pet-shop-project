import { Flex } from "antd";
import styled from "styled-components";

const Input = styled.input`
  background-color: ${({ $bg }) => ($bg ? $bg : "transparent")};
  font-size: 20px;
  color: inherit;
  padding: 16px 32px;
  border: 1px solid ${({ $border }) => ($border ? $border : "#fff")};

  border-radius: 6px;

  &::placeholder {
    color: ${({ $placeholderColor }) =>
      $placeholderColor ? $placeholderColor : "#fff"};
  }
`;

function Inputs({ register, errors, config = {} }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return (
    <Flex gap={16} vertical>
      <Input
        id="name"
        type="text"
        placeholder="Name"
        {...register("name", {
          required: {
            value: true,
            message: "This field is required",
          },
        })}
        $bg={config.bg || null}
        $border={config.border || null}
        $placeholderColor={config.placeholderColor || null}
      />
      {errors.name && <p>{errors.name.message}</p>}

      <Input
        id="phone"
        type="text"
        placeholder="Phone number"
        {...register("phone", {
          required: {
            value: true,
            message: "This field is required",
          },
        })}
        $bg={config.bg || null}
        $border={config.border || null}
        $placeholderColor={config.placeholderColor || null}
      />
      {errors.phone && <p>{errors.phone.message}</p>}

      <Input
        id="email"
        type="text"
        placeholder="Email"
        {...register("email", {
          required: {
            value: true,
            message: "Email is required",
          },
          pattern: {
            value: emailRegex,
            message: "Email does not seem correct",
          },
        })}
        $bg={config.bg || null}
        $border={config.border || null}
        $placeholderColor={config.placeholderColor || null}
      />
      {errors.email && <p>{errors.email.message}</p>}
    </Flex>
  );
}

export default Inputs;
