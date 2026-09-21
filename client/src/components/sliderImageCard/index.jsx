import Card from "../card";
import CategoryCard from "../categoryCard";

function SliderImageCard({ card }) {
  return card.discont_price ? (
    <Card card={card} />
  ) : (
    <CategoryCard card={card} />
  );
}

export default SliderImageCard;
