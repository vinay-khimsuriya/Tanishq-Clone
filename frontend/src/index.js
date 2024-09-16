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
    ],
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
