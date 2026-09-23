import { Flex, Modal } from "antd";
import { StyledH3 } from "../../../styles/commonStyles";
import {
  DescriptionParagraph,
  DescriptionSubheading,
  OldPriceTag,
  PriceContainer,
  PriceTag,
  ReadBtn,
  StyledButton,
} from "../styles";
import Counter from "../../../components/counter";
import { useState } from "react";
import { DiscountTag } from "../../../components/sliderImageCard/styles";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import { reset } from "../../../redux/slices/counterSlice";

function ItemInfo({ product }) {
  const [fullText, setFullText] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const quantity = useSelector((state) => state.counter.value);

  const success = () => {
    Modal.success({
      title: "The product is in your cart",
      content: "Your products have been successfully added to your cart!",
      onOk() {
        dispatch(reset());
        navigate(-1);
      },
    });
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        product,
        quantity,
      }),
    );
    success();
  };

  const isDiscounted = product?.discont_price;
  const discountInPercents = Math.round(
    ((product?.price - product?.discont_price) / product?.price) * 100,
  );

  return (
    <Flex gap={32} vertical>
      <StyledH3>{product?.title}</StyledH3>

      <PriceContainer>
        <PriceTag>
          $
          {isDiscounted
            ? product?.discont_price * quantity
            : product?.price * quantity}
        </PriceTag>
        {isDiscounted && (
          <OldPriceTag>
            ${product?.price * quantity}
            <DiscountTag $top="-20px" $right="-80px">
              -{discountInPercents}%
            </DiscountTag>
          </OldPriceTag>
        )}
      </PriceContainer>

      <Flex gap={32}>
        <Counter />
        <StyledButton type="primary" onClick={handleAddToCart}>
          Add to cart
        </StyledButton>
      </Flex>

      <Flex gap={16} vertical>
        <DescriptionSubheading>Description</DescriptionSubheading>
        <DescriptionParagraph>
          {!fullText
            ? product?.description.slice(0, 500) + "..."
            : product?.description}
        </DescriptionParagraph>
        <ReadBtn onClick={() => setFullText((cuttedText) => !cuttedText)}>
          {fullText ? "Hide" : "Read more"}
        </ReadBtn>
      </Flex>
    </Flex>
  );
}

export default ItemInfo;
