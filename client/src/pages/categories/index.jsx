import { StyledH2 } from "../../styles/commonStyles";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCurrentPageData } from "../../redux/slices/pageLoader";
import CategoryCard from "../../components/categoryCard";

import {
  CardsContainer,
  CategoriesContainer,
  CategoriesPage,
  StyledBreadCrumb,
} from "./styles";

function Categories() {
  const dispatch = useDispatch();
  const location = useLocation();

  const { data } = useSelector((state) => state.pageLoader);

  const currentPage = location.pathname.split("/")[1];

  useEffect(() => {
    dispatch(fetchCurrentPageData(currentPage));
  }, [dispatch, currentPage]);

  // console.log(data);

  return (
    <CategoriesPage>
      <StyledBreadCrumb
        items={[
          {
            title: <a href="/">Main page</a>,
          },
          {
            title: "Categories",
          },
        ]}
        separator={<span className="separator" />}
      />

      <CategoriesContainer>
        <StyledH2>Categories</StyledH2>

        <CardsContainer>
          {data.map((category) => {
            return <CategoryCard card={category} key={category.id} />;
          })}
        </CardsContainer>
      </CategoriesContainer>
    </CategoriesPage>
  );
}

export default Categories;
