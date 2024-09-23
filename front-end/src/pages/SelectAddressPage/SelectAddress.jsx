import React from 'react';
import {SelectLocationInner, SelectLocationOuter} from "./SelectAddressLayout";
import AddressList from "../../components/section/AddressList/AddressList";
import {useRecoilValue} from "recoil";
import SelectMapModal from "../../components/modal/SelectMap/SelectMapModal";
import {isModalOpenState} from "../../recoil/flag/atoms";

function SelectAddress(props) {
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

export default SelectAddress;