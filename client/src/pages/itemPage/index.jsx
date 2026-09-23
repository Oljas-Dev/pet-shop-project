import { Link, useParams } from "react-router-dom";
import { CategoriesPage, StyledBreadCrumb } from "../categories/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchCurrentProduct } from "../../redux/slices/pageLoader";
import axios from "axios";
import { ItemContainer, StyledItemImage } from "./styles";
import ItemInfo from "./itemInfo";

function ItemPage() {
  const [currentCategory, setCurrentCategory] = useState("");

  const { itemId } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.pageLoader.product);

  const product = data[0];

  useEffect(() => {
    dispatch(fetchCurrentProduct(itemId));
  }, [dispatch, itemId]);

  useEffect(() => {
    if (!product?.categoryId) return;

    axios
      .get(`http://localhost:3333/categories/${product.categoryId}`)
      .then((response) => {
        setCurrentCategory(response.data.category);
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the category!",
          error.message,
        );
      });
  }, [product]);

  return (
    <CategoriesPage>
      <StyledBreadCrumb
        items={[
          {
            title: <Link to="/">Main page</Link>,
          },
          {
            title: <Link to="/categories">Categories</Link>,
          },
          {
            title: product && (
              <Link to={`/categories/${product.categoryId}`}>
                {currentCategory?.title || "is loading..."}
              </Link>
            ),
          },
          {
            title: product?.title.split(" ").slice(-2).join(" "),
          },
        ]}
        separator={<span className="separator" />}
      />
      <ItemContainer>
        <StyledItemImage
          src={`http://localhost:3333${product?.image}`}
          alt=""
        />
        <ItemInfo product={product} />
      </ItemContainer>
    </CategoriesPage>
  );
}

export default ItemPage;
