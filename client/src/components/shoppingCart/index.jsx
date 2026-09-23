import { useDispatch } from "react-redux";
import {
  CartContainer,
  CartContent,
  CartImage,
  CartItemsContainer,
  CloseIcon,
  Subheading,
} from "../../pages/cart/styles";
import { Button, Flex, Modal } from "antd";
import { CounterCart } from "../counter";
import PriceTagSmall from "../priceTagsSmall";
import Inputs from "../mainPageForm/inputs";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { StyledH2, StyledH3 } from "../../styles/commonStyles";
import { useState } from "react";
import { clearCart } from "../../redux/slices/cartSlice";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 32px;
  background-color: rgba(241, 243, 244, 1);
  padding: 32px;
  border-radius: 12px;
`;

const StyledP = styled.p`
  font-size: 40px;
  font-weight: 500;
  color: rgba(139, 139, 139, 1);
`;

const StyledButton = styled(Button)`
  background-color: rgba(13, 80, 255, 1);
  font-size: 20px;
  font-weight: 600;
  padding: 24px 0;
`;

function ShoppingCart({ showModal, itemsInCart }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  //   const itemsInCart = useSelector((state) => state.cart.items);

  const total = itemsInCart.reduce((sum, item) => {
    const price = item.discont_price != null ? item.discont_price : item.price;

    return sum + price * item.quantity;
  }, 0);

  const inputConfig = {
    bg: "#fff",
    placeholderColor: "rgba(139, 139, 139, 1)",
    border: "rgba(221, 221, 221, 1)",
  };

  function onSubmit(data) {
    console.log(data);
    setIsModalOpen(true);
  }

  //

  return (
    <CartContainer>
      <div>
        {itemsInCart.map((item) => {
          return (
            <CartItemsContainer key={item.id}>
              <CartImage
                src={`http://localhost:3333${item?.image}`}
                alt="Product picture"
              />

              <CartContent gap={16} vertical>
                <Subheading justify="space-between" align="center">
                  <p>{item.title}</p>
                  <CloseIcon onClick={() => showModal(item.id)} />
                </Subheading>

                <Flex gap={32}>
                  <CounterCart cart={item} />
                  <PriceTagSmall
                    product={item}
                    discount={false}
                    quantity={item.quantity}
                  />
                </Flex>
              </CartContent>
            </CartItemsContainer>
          );
        })}
      </div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Flex gap={24} vertical>
          <StyledH3>Order details</StyledH3>

          <div>
            <StyledP>{itemsInCart.length} items</StyledP>
            <Flex align="end" justify="space-between">
              <StyledP>Total</StyledP>
              <StyledH2>${total}</StyledH2>
            </Flex>
          </div>
        </Flex>
        <Inputs register={register} errors={errors} config={inputConfig} />
        <StyledButton type="primary" htmlType="submit">
          Order
        </StyledButton>
      </Form>

      <Modal
        className="order-modal"
        open={isModalOpen}
        onCancel={() => {
          dispatch(clearCart());
          reset();
          setIsModalOpen(false);
        }}
        footer={null}
        closable
        styles={{
          content: {
            background: "rgba(13, 80, 255, 1)",
          },
        }}
      >
        <h3>Congratulations!</h3>

        <p>
          Your order has been successfully placed on the website. A manager will
          contact you shortly to confirm your order.
        </p>
      </Modal>
    </CartContainer>
  );
}

export default ShoppingCart;
