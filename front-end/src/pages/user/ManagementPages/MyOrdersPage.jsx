import React from "react";
import { CommonPageWrap, Font } from "../../../assets/styles/CommonStyle";
import Loading from "components/common/Loading/Loading";
import OrderInfo from "pages/user/ManagementPages/components/OrderInfo";
import useGetOrders from "./hooks/useGetOrders";
import Pagination from "components/common/Pagination/Pagination";
import Empty from "components/common/Empty/Empty";

function MyOrdersPage() {
  const { ordersData, totalPages, isLoading, page, setPage } = useGetOrders();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <CommonPageWrap>
      {ordersData.length > 0 ? (
        <>
          <Font size={"x-large"}>주문 목록</Font>
          {ordersData.map((order) => (
            <OrderInfo order={order} key={order.orderId} />
          ))}
          <Pagination totalPages={totalPages} page={page} setPage={setPage} />
        </>
      ) : (
        <Empty text={"주문 목록이 없습니다"} />
      )}
    </CommonPageWrap>
  );
}

export default MyOrdersPage;
