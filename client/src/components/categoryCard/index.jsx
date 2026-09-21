import { StyledCategoryCard, StyledImage } from "../sliderImageCard/styles";

function CategoryCard({ card }) {
  return (
    <StyledCategoryCard to={`/categories/${card.id}`}>
      <StyledImage
        src={`http://localhost:3333${card.image}`}
        alt={card.title}
        $radius="12px"
      />
      <p>{card.title}</p>
    </StyledCategoryCard>
  );
}

export default CategoryCard;
