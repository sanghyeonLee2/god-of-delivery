import React from 'react';
import {CommonPageWrap, Font} from "../../../assets/styles/CommonStyle";
import Loading from "components/common/Loading/Loading";
import OrderList from "pages/user/ManagementPage/components/OrderList";
import useGetOrders from "../../../hooks/useGetOrders";
import Pagination from "components/common/Pagination/Pagination";

function OrdersPage(props) {
    const {
        ordersData,
        totalPages,
        isLoading,
        page,
        setPage
    } = useGetOrders();

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <CommonPageWrap>
            <Font size={"x-large"}>주문 목록</Font>
            <OrderList orders={ordersData}/>
            <Pagination totalPages={totalPages} page={page}
                        setPage={setPage}/>
        </CommonPageWrap>
    );
}

export default OrdersPage;