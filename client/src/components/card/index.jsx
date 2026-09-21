import {
  DiscountTag,
  OldPrice,
  PriceContainer,
  SalePrice,
  StyledCategoryCard,
  StyledImage,
  TitleAndPriceContainer,
} from "../sliderImageCard/styles";

function Card({ card }) {
  const isDiscounted = card?.discont_price;

  const discountPrice = Math.round(
    ((card?.price - card?.discont_price) / card?.price) * 100,
  );
  return (
    <StyledCategoryCard $border key={card?.id}>
      <StyledImage
        src={`http://localhost:3333${card?.image}`}
        alt={card?.title}
        $border
      />
      <TitleAndPriceContainer>
        <p>{card?.title.slice(0, 22) + "..."}</p>
        <PriceContainer>
          <SalePrice>
            ${isDiscounted ? card?.discont_price : card?.price}
          </SalePrice>
          {isDiscounted && <OldPrice>{card?.price}</OldPrice>}
        </PriceContainer>
      </TitleAndPriceContainer>

      {isDiscounted && <DiscountTag>-{discountPrice}%</DiscountTag>}
    </StyledCategoryCard>
  );
}

export default Card;
