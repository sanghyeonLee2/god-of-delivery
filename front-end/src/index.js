import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SIgnInPage";
import HomePage from "./pages/HomePage/HomePage";
import StoresPage from "./pages/StoresPage/StoresPage";
import {QueryClient, QueryClientProvider} from "react-query"
import {RecoilRoot} from "recoil";
import Loading from "./components/common/Loading/Loading";
import StorePage from "./pages/StorePage/StorePage";
import CartPage from "./pages/CartPage/CartPage";
import PaymentPage from "./pages/PaymentPage/PaymentPage";
import OrderPage from "pages/OrderPage/OrderPage";
import OrdersPage from "pages/ManagementPage/OrdersPage";
import OwnerPage from "pages/OwnerPage/OwnerPage";
import StoreManagement from "pages/OwnerPage/components/StoreManagement";
import MenuManagement from "pages/OwnerPage/components/MenuManagement";
import ErrorPage from "pages/ErrorPage/ErrorPage";
import OwnerReviewPage from "pages/OwnerPage/OwnerReviewPage";
import ReviewManagement from "pages/ManagementPage/ReviewManagement";

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "",
            element: <HomePage/>

        },
        {
            path: "sign-up",
            element: <SignUpPage/>
        }, {
            path: "sign-in",
            element: <SignInPage/>
        }, {
            path: "stores/:categoryId",
            element: <StoresPage/>,
        },
        {
            path: "stores/:categoryId/:storeId",
            element: <StorePage/>,
        },
        {
            path: "loading",
            element: <Loading/>
        },
        {
            path: "cart",
            element: <CartPage/>
        },
        {
            path: "payment",
            element: <PaymentPage/>
        },
        {
            path: "orders/:orderId",
            element: <OrderPage/>
        },
        {
            path: "users/me/orders",
            element: <OrdersPage/>
        },
        {
            path: "users/me/reviews",
            element: <ReviewManagement/>
        },
        {
            path: "owners/me",
            element: <OwnerPage/>
        },
        {
            path: "owners/me/store",
            element: <StoreManagement/>
        }, {
            path: "owners/me/reviews",
            element: <OwnerReviewPage/>
        },
        {
            path: "owners/me/menus",
            element: <MenuManagement/>
        },
        {
            path: "error",
            element: <ErrorPage/>
        },
    ]
}])

root.render(
    <React.StrictMode>
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<Loading/>}>
                    <RouterProvider router={router}/>
                </Suspense>
            </QueryClientProvider>
        </RecoilRoot>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
