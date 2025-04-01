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
import { GlobalStyle } from "./assets/styles/GlobalStyle";
import RequireRole from "components/guards/RequireRole";
import OwnerLayout from "pages/owner/Common/OwnerLayout";
import UserLayout from "pages/user/UserLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "sign-in", element: <SignInPage /> },
      { path: "sign-up", element: <SignUpPage /> },
      // ✅ User Role Protected
      {
        path: "users",
        element: <RequireRole allowedRole="user" />,
        children: [
          {
            path: "me",
            element: <UserLayout />, // 📦 사용자 공통 레이아웃 (선택)
            children: [
              { path: "", element: <HomePage /> },
              { path: "stores/:categoryId", element: <StoresPage /> },
              { path: "stores/:categoryId/:storeId", element: <StorePage /> },
              { path: "cart", element: <CartPage /> },
              { path: "payment", element: <PaymentPage /> },
              { path: "orders/:orderId", element: <OrderStatusPage /> },
              { path: "orders", element: <MyOrdersPage /> },
              { path: "reviews", element: <MyReviewsPage /> },
              { path: "dibs", element: <DibsPage /> },
            ],
          },
        ],
      },
      {
        path: "owners",
        element: <RequireRole allowedRole="owner" />, // 🔐 보호 레이어
        children: [
          {
            path: "me",
            element: <OwnerLayout />, // 📦 공통 레이아웃
            children: [
              { path: "", element: <OwnerHomePage /> },
              { path: "store", element: <StoreManagementPage /> },
              { path: "reviews", element: <OwnerReviewPage /> },
              { path: "menus", element: <MenuManagementPage /> },
              { path: "menus/create", element: <CreateMenuPage /> },
              { path: "menus/:menuId/update", element: <UpdateMenuPage /> },
            ],
          },
        ],
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
      <GlobalStyle />
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
