import React from 'react';
import {SortingInner, SortingOuter} from "./SortingSectionLayout";
import Select from "components/common/Select/Select";
import Option from "components/common/Select/options/Option";
import categoryDummy from "../../../../assets/data/categoryDummy.json";
import storeSortingDummy from "../../../../assets/data/storeSorting.json";

function SortingSection({categoryId, setCategory, setSorting, sorting}) {
    return (
        <SortingOuter>
            <SortingInner>
                <Select defaultValue={sorting} onChange={(e) => setSorting(e.target.value)}>
                    {storeSortingDummy.map((e) =>
                        <Option key={e.id} text={e.id} value={e.value}/>)}
                </Select>
                <Select
                    defaultValue={categoryId}
                    onChange={(e) => setCategory(e.target.value)}>
                    {categoryDummy.map((category) =>
                        <Option key={category.id} text={category.name} value={category.id}/>)}
                </Select>
            </SortingInner>
        </SortingOuter>
    );
}


export default SortingSection;