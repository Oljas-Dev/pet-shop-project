import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentPageData } from "../../redux/slices/pageLoader";
import { CategoriesPage, StyledBreadCrumb } from "../categories/styles";
import PageWithItems from "../../components/pageWithItems";
import { useEffect } from "react";

function AllSalesPage() {
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
            title: "All sales",
          },
        ]}
        separator={<span className="separator" />}
      />

      <PageWithItems
        pageData={{
          title: "All sales",
          items: data,
          categories: false,
        }}
      />
    </CategoriesPage>
  );
}

export default AllSalesPage;
