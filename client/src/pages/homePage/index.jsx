import styled from "styled-components";
import HomepageCategories from "../../components/categories";
import Header from "../../components/header";
import HomepageProductsSale from "../../components/products";
import MainPageForm from "../../components/mainPageForm";

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
      <MainPageForm />
      <HomepageProductsSale />
    </StyledHomePage>
  );
}

export default HomePage;
