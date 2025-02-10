import React from 'react';
import {SortingInner, SortingOuter} from "./SortingSectionLayout";
import Select from "../../../components/common/Select/Select";
import Option from "../../../components/common/Select/options/Option";
import categoryDummy from "../../../assets/data/categoryDummy.json";
import storeSortingDummy from "../../../assets/data/storeSorting.json";
import {useNavigate} from "react-router-dom";

function SortingSection({categoryId}) {
    const navigate = useNavigate();
    return (
        <SortingOuter>
            <SortingInner>
                <Select defaultValue={"basic"}>{storeSortingDummy.map((e) =>
                    <Option key={e.id} text={e.id} value={e.value}/>)}
                </Select>
                <Select
                    defaultValue={categoryId}
                    onChange={(e) => navigate(`/category-info/${e.target.value}`, {state: {categoryId: e.target.value}})}>
                    {categoryDummy.map((e) =>
                        <Option key={e.id} text={e.id} value={e.id}/>)}
                </Select>
            </SortingInner>
        </SortingOuter>
    );
}

export default SortingSection;