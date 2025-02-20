import React from 'react';
import {SelectLocationInner, SelectLocationOuter} from "./SelectAddressPageLayout";
import AddressList from "./components/AddressList";

function SelectAddressPage(props) {
    return (
        <SelectLocationOuter>
            <SelectLocationInner>
                <AddressList/>
            </SelectLocationInner>
        </SelectLocationOuter>
    );
}

export default SelectAddressPage;