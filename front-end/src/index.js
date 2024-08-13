import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import SignUp from "./pages/SignUpPage/SignUp";

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([{
    path: "/",
    element: <App/>,
    children: [
        {
            path: "sign-up",
            element: <SignUp/>
        }]
}])

root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
