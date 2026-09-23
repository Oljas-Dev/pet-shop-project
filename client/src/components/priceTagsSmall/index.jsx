import {
  DiscountTag,
  OldPrice,
  PriceContainer,
  SalePrice,
} from "../sliderImageCard/styles";

function PriceTagSmall({ product, discount, quantity = 1 }) {
  const isDiscounted = product?.discont_price;

  const discountInPercents = Math.round(
    ((product?.price - product?.discont_price) / product?.price) * 100,
  );

  return (
    <PriceContainer>
      <SalePrice>
        $
        {isDiscounted
          ? product?.discont_price * quantity
          : product?.price * quantity}
      </SalePrice>
      {isDiscounted && <OldPrice>{product?.price * quantity}</OldPrice>}
      {isDiscounted && discount && (
        <DiscountTag>-{discountInPercents}%</DiscountTag>
      )}
    </PriceContainer>
  );
}

export default PriceTagSmall;
