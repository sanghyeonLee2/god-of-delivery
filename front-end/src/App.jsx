import React, {useEffect} from "react";
import {GlobalStyle} from "./assets/styles/GlobalStyle";
import {Header} from "components/common/Header/Header";
import {Outlet} from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import {useRecoilState, useRecoilValue} from "recoil";
import {isSignInState, userInfoState} from "./recoil/user/atoms";
import {authGetApi} from "./apis/api/user";
import {isModalOpenState} from "./recoil/flag/atoms";
import DefaultModal from "./components/modal/DefaultModal";

import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            onError: (error) => {
                console.error("쿼리에서 에러 발생!", error);
                window.location.href = "/error";  // ✅ 에러 발생 시 /error 페이지로 이동
            },
        },
        mutations: {
            onError: (error, variables) => {
                console.error("변이에서 에러 발생!", error);
                window.location.href = "/error";  // ✅ 에러 발생 시 /error 페이지로 이동
            },
        },
    },
});


function App() {
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
        <QueryClientProvider client={queryClient}>
            <div className="App">
                <Header/>
                <GlobalStyle/>
                <Outlet/>
            </div>
            <Footer/>
            {isModalOpen.flag &&
                <DefaultModal modalType={isModalOpen.modalType} apiUrl={isModalOpen.apiUrl}/>}
        </QueryClientProvider>
    );
}

export default App;
