import HeaderWithButton from "../../components/HeaderWithButton";
import { CategoriesPage } from "../categories/styles";
import { useDispatch, useSelector } from "react-redux";
import { Button, Flex, Modal } from "antd";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { useState } from "react";
import ShoppingCart from "../../components/shoppingCart";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StyledEmptyCart = styled(Flex)`
  margin-top: 40px;
  margin-bottom: 80px;
  button {
    width: fit-content;
  }
`;

function CartPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const itemsInCart = useSelector((state) => state.cart.items);

  const headerObj = {
    title: "Shopping cart",
    href: "/products",
    btnText: "Back to the store",
  };

  const showModal = (id) => {
    setSelectedItemId(id);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    dispatch(removeFromCart(selectedItemId));
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <CategoriesPage>
      <HeaderWithButton headerObj={headerObj} />

      {itemsInCart.length > 0 ? (
        <ShoppingCart showModal={showModal} itemsInCart={itemsInCart} />
      ) : (
        <StyledEmptyCart gap={32} vertical>
          <p>Looks like you have no items in your basket currently.</p>
          <Button type="primary" onClick={() => navigate("/categories")}>
            Continue shopping
          </Button>
        </StyledEmptyCart>
      )}

      <Modal
        title="Remove item?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Are you sure you want to remove this item from your cart?</p>
      </Modal>
    </CategoriesPage>
  );
}

export default CartPage;
