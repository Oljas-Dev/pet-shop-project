import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentPageData } from "../../redux/slices/pageLoader";
import { CategoriesPage, StyledBreadCrumb } from "../categories/styles";
import axios from "axios";
import { useParams } from "react-router-dom";
import PageWithItems from "../../components/pageWithItems";

function CategoryProductsPage() {
  const [currentCategory, setCurrentCategory] = useState("");
  const { category } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.pageLoader.data);

  useEffect(() => {
    dispatch(fetchCurrentPageData("products"));

    axios
      .get(`http://localhost:3333/categories/${category}`)
      .then((response) => {
        setCurrentCategory(response.data.category);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the categories!",
          error.message,
        );
      });
  }, [dispatch, category]);

  return (
    <CategoriesPage>
      <StyledBreadCrumb
        items={[
          {
            title: <a href="/">Main page</a>,
          },
          {
            title: <a href="/categories">Categories</a>,
          },
          {
            title: currentCategory.title
              ? currentCategory.title
              : "is loading...",
          },
        ]}
        separator={<span className="separator" />}
      />

      <PageWithItems
        pageData={{
          title: currentCategory.title,
          items: data,
          categories: true,
        }}
      />
    </CategoriesPage>
  );
}

export default CategoryProductsPage;
