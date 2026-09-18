import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Applayout from "./components/appLayout";
import HomePage from "./pages/homePage";
import Categories from "./pages/categories";
import AllProductsPage from "./pages/allProducts";
import AllSalesPage from "./pages/allSales";
import CartPage from "./pages/cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Navigate replace to="homepage" />} />

          <Route path="homepage" index element={<HomePage />} />
          <Route path="categories" index element={<Categories />} />
          <Route path="all-products" index element={<AllProductsPage />} />
          <Route path="all-sales" index element={<AllSalesPage />} />
          <Route path="cart" index element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
