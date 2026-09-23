import { Button } from "antd";
import {
  StyledCategoryCard,
  StyledImage,
  TitleAndPriceContainer,
} from "../sliderImageCard/styles";
import styled from "styled-components";
import { useState } from "react";
import PriceTagSmall from "../priceTagsSmall";

const ImageAndBtnContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;
const AddToCartBtn = styled(Button)`
  font-size: 20px;
  font-weight: 600;
  background: rgba(13, 80, 255, 1);
  width: 90%;
  padding: 24px 0 !important;
  position: absolute;
  bottom: 16px;

  &:hover {
    background: rgba(40, 40, 40, 1) !important;
  }
`;

function Card({ card }) {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <StyledCategoryCard $border key={card?.id} to={`/item/${card.id}`}>
      <ImageAndBtnContainer onMouseEnter={() => setShowBtn(true)}>
        {showBtn && <AddToCartBtn type="primary">Add to cart</AddToCartBtn>}
        <StyledImage
          src={`http://localhost:3333${card?.image}`}
          alt={card?.title}
          $border
        />
      </ImageAndBtnContainer>

      <TitleAndPriceContainer>
        <p>{card?.title.slice(0, 22) + "..."}</p>
        <PriceTagSmall product={card} discount />
      </TitleAndPriceContainer>
    </StyledCategoryCard>
  );
}

export default Card;
