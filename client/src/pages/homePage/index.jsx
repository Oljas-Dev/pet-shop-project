import styled from "styled-components";
import HomepageCategories from "../../components/categories";
import Header from "../../components/header";
import HomepageProductsSale from "../../components/products";

const StyledHomePage = styled.section`
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding-bottom: 80px;
`;

function HomePage() {
  return (
    <StyledHomePage>
      <Header />
      <HomepageCategories />
      <HomepageProductsSale />
    </StyledHomePage>
  );
}

export default HomePage;
