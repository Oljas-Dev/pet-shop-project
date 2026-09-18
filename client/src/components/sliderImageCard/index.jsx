import {
  DiscountTag,
  OldPrice,
  PriceContainer,
  SalePrice,
  StyledCategoryCard,
  StyledImage,
  TitleAndPriceContainer,
} from "./styles";

function SliderImageCard({ card }) {
  const discountPrice = Math.round(
    ((card.price - card.discont_price) / card.price) * 100,
  );

  return card.discont_price ? (
    <StyledCategoryCard $border>
      <StyledImage
        src={`http://localhost:3333${card.image}`}
        alt={card.title}
        $border
      />
      <TitleAndPriceContainer>
        <p>{card.title.slice(0, 22) + "..."}</p>
        <PriceContainer>
          <SalePrice>${card.discont_price}</SalePrice>
          <OldPrice>{card.price}</OldPrice>
        </PriceContainer>
      </TitleAndPriceContainer>

      <DiscountTag>-{discountPrice}%</DiscountTag>
    </StyledCategoryCard>
  ) : (
    <StyledCategoryCard>
      <StyledImage
        src={`http://localhost:3333${card.image}`}
        alt={card.title}
        $radius="12px"
      />
      <p>{card.title}</p>
    </StyledCategoryCard>
  );
}

export default SliderImageCard;
