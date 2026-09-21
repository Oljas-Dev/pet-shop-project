import { useLocation, useParams } from "react-router-dom";
import { StyledH2 } from "../../styles/commonStyles";
import Sorting from "./sortingComponent";
import styled from "styled-components";
import { Flex } from "antd";
import Card from "../card";
import { CardsContainer } from "../../pages/categories/styles";

const ItemsPage = styled(Flex)`
  margin-bottom: 80px;
`;

function PageWithItems({ pageData }) {
  const { category } = useParams();
  const location = useLocation();

  if (!pageData) return <p>is loading...</p>;

  let data = pageData.items;

  if (category) {
    data = pageData.items.filter(
      (item) => item.categoryId === Number(category),
    );
  } else if (location.pathname === "/all-sales") {
    data = pageData.items.filter((item) => item.discont_price);
  } else if (location.pathname === "/products") {
    data = pageData.items;
  }

  const filteredData = data;

  return (
    <ItemsPage vertical gap={40}>
      <StyledH2>{pageData.title}</StyledH2>

      <Sorting />

      <CardsContainer>
        {filteredData.map((card) => {
          return <Card card={card} key={card.id} />;
        })}
      </CardsContainer>
    </ItemsPage>
  );
}

export default PageWithItems;
