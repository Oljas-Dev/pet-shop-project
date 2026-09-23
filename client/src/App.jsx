import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/appLayout";
import HomePage from "./pages/homePage";
import Categories from "./pages/categories";
import AllProductsPage from "./pages/allProducts";
import AllSalesPage from "./pages/allSales";
import CartPage from "./pages/cart";
import CategoryProductPage from "./pages/categoryProducts";
import ItemPage from "./pages/itemPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Navigate replace to="homepage" />} />

          <Route path="homepage" index element={<HomePage />} />
          <Route path="categories" element={<Categories />} />
          <Route
            path="categories/:category"
            element={<CategoryProductPage />}
          />

          <Route path="products" element={<AllProductsPage />} />
          <Route path="all-sales" element={<AllSalesPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="item/:itemId" element={<ItemPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
