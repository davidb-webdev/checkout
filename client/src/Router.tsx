import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductListPage from "./pages/ProductListPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import CheckoutPage from "./pages/CheckoutPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ProductListPage />
      },
      {
        path: "/product/:productId",
        element: <ProductDetailsPage />
      },
      {
        path: "/checkout",
        element: <CheckoutPage />
      },
      {
        path: "/ordersuccess",
        element: <OrderSuccessPage />
      }
    ]
  }
]);

export default router;
