import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Flex } from "antd";
import styled from "styled-components";

import { StyledH2 } from "../../styles/commonStyles";
import Sorting from "./sortingComponent";
import Card from "../card";
import { CardsContainer } from "../../pages/categories/styles";

const ItemsPage = styled(Flex)`
  margin-bottom: 80px;
`;

function PageWithItems({ pageData }) {
  const { category } = useParams();
  const location = useLocation();

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discountedOnly, setDiscountedOnly] = useState(false);
  const [sort, setSort] = useState("default");

  if (!pageData) return <p>is loading...</p>;

  let data = [...pageData.items];

  // Category
  if (category) {
    data = data.filter((item) => item.categoryId === Number(category));
  }

  // All sales page
  if (location.pathname === "/all-sales") {
    data = data.filter((item) => item.discont_price);
  }

  // Minimum price
  if (minPrice !== "") {
    data = data.filter((item) => item.price >= Number(minPrice));
  }

  // Maximum price
  if (maxPrice !== "") {
    data = data.filter((item) => item.price <= Number(maxPrice));
  }

  // Discounted items
  if (discountedOnly) {
    data = data.filter((item) => item.discont_price);
  }

  // Sorting
  if (sort === "ascending") {
    data.sort((a, b) => a.price - b.price);
  }

  if (sort === "descending") {
    data.sort((a, b) => b.price - a.price);
  }

  return (
    <ItemsPage vertical gap={40}>
      <StyledH2>{pageData.title}</StyledH2>

      <Sorting
        minPrice={minPrice}
        maxPrice={maxPrice}
        discountedOnly={discountedOnly}
        sort={sort}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
        setDiscountedOnly={setDiscountedOnly}
        setSort={setSort}
      />

      <CardsContainer>
        {data.length > 0 ? (
          data.map((card) => <Card card={card} key={card.id} />)
        ) : (
          <p>No items found</p>
        )}
      </CardsContainer>
    </ItemsPage>
  );
}

export default PageWithItems;
