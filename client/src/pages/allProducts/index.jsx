import { useDispatch, useSelector } from "react-redux";
import { CategoriesPage, StyledBreadCrumb } from "../categories/styles";
import { fetchCurrentPageData } from "../../redux/slices/pageLoader";
import { useEffect } from "react";
import PageWithItems from "../../components/pageWithItems";

function AllProductsPage() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.pageLoader.data);

  useEffect(() => {
    dispatch(fetchCurrentPageData("products"));
  }, [dispatch]);

  return (
    <CategoriesPage>
      <StyledBreadCrumb
        items={[
          {
            title: <a href="/">Main page</a>,
          },
          {
            title: "All products",
          },
        ]}
        separator={<span className="separator" />}
      />

      <PageWithItems
        pageData={{
          title: "All products",
          items: data,
          categories: false,
        }}
      />
    </CategoriesPage>
  );
}

export default AllProductsPage;
