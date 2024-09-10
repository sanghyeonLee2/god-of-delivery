import React from 'react';
import {AddressListOuter} from "./AddressListLayout";
import AddressBox from "../../common/AddressBox/AddressBox";
import useGet from "../../../hooks/useGet";
import Loading from "../../common/Loading/Loading";
import {useRecoilValue} from "recoil";
import {userInfoState} from "../../../recoil/user/atoms";

function AddressList(props) {
    const userInfo = useRecoilValue(userInfoState)
    const [data, isError, status, isLoading] = useGet(`customer/${userInfo.userId}/address`)
    //const {mutate: onSignIn} = usePost("auth/sign-in")
    if (isLoading)
        return <Loading/>
    return (
        <AddressListOuter>
            {data.data?.map((e) =>
                <AddressBox addressInfo={e} key={e.id}/>
            )}
        </AddressListOuter>
    );
}

export default AddressList;