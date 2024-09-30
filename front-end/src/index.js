import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import SignInPage from "./pages/AuthPage/SIgnInPage";
import HomePage from "./pages/HomePage.js/HomePage";
import CategoryInfo from "./pages/CategoryInfoPage/CategoryInfo";
import {QueryClient, QueryClientProvider} from "react-query"
import {RecoilRoot} from "recoil";
import Loading from "./components/common/Loading/Loading";
import SelectAddress from "./pages/SelectAddressPage/SelectAddress";
import StorePage from "./pages/StorePage/StorePage";

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
            path: "category-info/:id",
            element: <CategoryInfo/>
        }, {
            path: "select-address",
            element: <SelectAddress/>,
        }, {
            path: "store/:id",
            element: <StorePage/>
        },
        {
            path: "loading",
            element: <Loading/>
        }
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
