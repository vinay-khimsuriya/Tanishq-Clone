import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import appStore from "./redux files/appStore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Container from "./component/Container";
import ProductDetail from "./component/ProductDetail";
import SpecialCategory from "./component/SpecialCategory";
import ImageCarousal from "./carousal/ImageCarousal";
import ScrollToTop from "./utils/ScrollToTop";
import Cart from "./component/Cart";
import Admin from "./admin/Admin.js";
import Default from "./admin/Default.js";
import ManageCategory from "./admin/ManageCategory.js";
import ShopMenu from "./component/shop/ShopMenu.js";
import ManageProduct from "./admin/ManageProduct.js";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <div>
            <SpecialCategory />
            <ImageCarousal />
            <Container />
          </div>
        ),
      },
      {
        path: "/product",
        element: <ProductDetail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/shop/:slug",
        element: <ShopMenu />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <Default />,
      },
      {
        path: "/admin/managecategory",
        element: <ManageCategory />,
      },
      {
        path: "/admin/manageproduct",
        element: <ManageProduct />,
      },
    ],
  },
  {
    path: "/shop/:shopId",
    element: <ShopMenu />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter}>
      <ScrollToTop />
    </RouterProvider>
  </Provider>
);

reportWebVitals();
