import {Outlet} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import React from "react";
import {ReactQueryDevtools} from "react-query/devtools"

function App() {
    return (
        <>
            <div className="App">
                <GlobalStyle/>
                <Header/>
                <Outlet/>
            </div>
            <Footer/>
            <ReactQueryDevtools initialIsOpen={false} position={"bottom-right"}/>
        </>
    );
}

export default App;
