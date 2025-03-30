import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUpPage from "pages/common/AuthPage/SignUpPage";
import SignInPage from "pages/common/AuthPage/SignInPage";
import HomePage from "pages/user/HomePage/HomePage";
import StoresPage from "pages/user/StoresPage/StoresPage";
import { QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import Loading from "./components/common/Loading/Loading";
import StorePage from "pages/user/StorePage/StorePage";
import CartPage from "pages/user/CartPage/CartPage";
import PaymentPage from "pages/user/PaymentPage/PaymentPage";
import OrderStatusPage from "pages/user/OrderStatusPage/OrderStatusPage";
import MyOrdersPage from "pages/user/ManagementPages/MyOrdersPage";
import OwnerHomePage from "pages/owner/OwnerHomePage/OwnerHomePage";
import StoreManagementPage from "pages/owner/StoreManagementPage/StoreManagementPage";
import ErrorPage from "pages/common/ErrorPage/ErrorPage";
import MyReviewsPage from "pages/user/ManagementPages/MyReviewsPage";
import customQueryClient from "./react-query/queryClient";
import { ToastContainer } from "react-toastify";
import DibsPage from "pages/user/DibsPage/DibsPage";
import OwnerReviewPage from "pages/owner/OwnerReviewPage/OwnerReviewPage";
import MenuManagementPage from "pages/owner/MenuManagementPages/MenuManagementPage";
import CreateMenuPage from "pages/owner/MenuManagementPages/CreateMenuPage";
import UpdateMenuPage from "pages/owner/MenuManagementPages/UpdateMenuPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "sign-up",
        element: <SignUpPage />,
      },
      {
        path: "sign-in",
        element: <SignInPage />,
      },
      {
        path: "stores/:categoryId",
        element: <StoresPage />,
      },
      {
        path: "stores/info/:storeId",
        element: <StorePage />,
      },
      {
        path: "loading",
        element: <Loading />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },
      {
        path: "orders/:orderId",
        element: <OrderStatusPage />,
      },
      {
        path: "users/me/orders",
        element: <MyOrdersPage />,
      },
      {
        path: "users/me/reviews",
        element: <MyReviewsPage />,
      },
      {
        path: "users/me/dibs",
        element: <DibsPage />,
      },
      {
        path: "owners/me",
        element: <OwnerHomePage />,
      },
      {
        path: "owners/me/store",
        element: <StoreManagementPage />,
      },
      {
        path: "owners/me/reviews",
        element: <OwnerReviewPage />,
      },
      {
        path: "owners/me/menus",
        element: <MenuManagementPage />,
      },
      {
        path: "owners/me/menus/create",
        element: <CreateMenuPage />,
      },
      {
        path: "owners/me/menus/:menuId/update",
        element: <UpdateMenuPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

root.render(
  <React.StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={customQueryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </RecoilRoot>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
