import React, {useEffect} from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import {useRecoilState, useRecoilValue} from "recoil";
import {isSignInState, userInfoState} from "./recoil/user/atoms";
import {authGetApi} from "./apis/api/user";

function App() {
    //const [data, isError, status, isLoading,] = useAuthGet("me")
    const isSignIn = useRecoilValue(isSignInState)
    const [userInfo, setUserInfo] = useRecoilState(userInfoState)
    useEffect(() => {
        const fetchData = async () => {
            const {data} = await authGetApi("me")
            setUserInfo(data)
        }
        fetchData()
    }, [isSignIn, setUserInfo]);

    return (
        <>
            <div className="App">
                <Header currentAddress={isSignIn && userInfo?.currentAddress}/>
                <GlobalStyle/>
                <Outlet/>
            </div>
            <Footer/>
        </>
    );
}

export default App;
