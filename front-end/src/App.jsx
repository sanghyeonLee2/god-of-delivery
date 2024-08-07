import {Outlet} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default App;
