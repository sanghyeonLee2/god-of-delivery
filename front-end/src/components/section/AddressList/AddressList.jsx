import React from 'react';
import {AddressListOuter} from "./AddressListLayout";
import AddressBox from "../../common/AddressBox/AddressBox";

function AddressList(props) {
    return (
        <AddressListOuter>
            <AddressBox/>
        </AddressListOuter>
    );
}

export default AddressList;