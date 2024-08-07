import {Outlet} from "react-router-dom";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";


function App() {
    return (
        <div className="App">
            <GlobalStyle/>
            <Header/>
            <Outlet/>
        </div>
    );
}

export default App;
