import React, {useEffect} from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "./components/common/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import {useRecoilState, useRecoilValue} from "recoil";
import {isSignInState, userInfoState} from "./recoil/user/atoms";
import {authGetApi} from "./apis/api/user";
import {isModalOpenState} from "./recoil/flag/atoms";
import DefaultModal from "./components/modal/DefaultModal";

function App() {
    //const [data, isError, status, isLoading,] = useAuthGet("me")
    const isSignIn = useRecoilValue(isSignInState)
    const isModalOpen = useRecoilValue(isModalOpenState)
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
            {isModalOpen.modalFlag &&
                <DefaultModal modalType={isModalOpen.modalType} modalIdData={isModalOpen.modalIdData}/>}
        </>
    );
}

export default App;
