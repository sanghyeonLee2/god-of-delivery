import React from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/Footer/Footer";

function App() {
    return (
        <>
            <div className="App">
                <Header/>
                <GlobalStyle/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
