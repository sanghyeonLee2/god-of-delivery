import React from 'react';
import {SelectLocationInner, SelectLocationOuter} from "./SelectAddressPageLayout";
import AddressList from "./components/AddressList";
import {useRecoilValue} from "recoil";
import SelectMapModal from "../../components/modal/SelectMap/SelectMapModal";
import {isModalOpenState} from "../../recoil/flag/atoms";

function SelectAddressPage(props) {
    const isModalOpen = useRecoilValue(isModalOpenState)
    return (
        <SelectLocationOuter>
            <SelectLocationInner>
                {isModalOpen && <SelectMapModal/>}
                <AddressList/>
            </SelectLocationInner>
        </SelectLocationOuter>
    );
}

export default SelectAddressPage;