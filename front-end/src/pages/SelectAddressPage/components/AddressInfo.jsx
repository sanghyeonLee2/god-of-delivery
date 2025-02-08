import React, {useEffect} from 'react';
import {useRecoilValue} from "recoil";
import {Font} from "../../../assets/styles/CommonStyle";
import {addressState} from "../../../recoil/map/atoms";

function AddressInfo({setValue}) {
    const addressValue = useRecoilValue(addressState);

    useEffect(() => {
        setValue("address", addressValue.address);
        setValue("lat", addressValue.lat);
        setValue("lng", addressValue.lng);
    }, [addressValue, setValue]);

    return (
        <div>
            <Font>
                {addressValue?.roadInfo}
            </Font>
            <Font>
                {addressValue?.address}
            </Font>
        </div>
    );
}

export default AddressInfo;