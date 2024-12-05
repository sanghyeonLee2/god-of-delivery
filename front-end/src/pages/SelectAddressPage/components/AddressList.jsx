import React from 'react';
import {AddressListOuter} from "./AddressListLayout";
import AddressBox from "./AddressBox";
import useGet from "../../../hooks/useGet";
import Loading from "../../../components/common/Loading/Loading";

function AddressList(props) {
    //const userInfo = useRecoilValue(userInfoState)
    const [data, isError, status, isLoading] = useGet("address")
    //const {mutate: onSignIn} = usePost("auth/sign-in")
    if (isLoading)
        return <Loading/>
    return (
        <AddressListOuter>
            {data?.data?.map((e) =>
                <AddressBox addressInfo={e} key={e.id}/>
            )}
        </AddressListOuter>
    );
}

export default AddressList;