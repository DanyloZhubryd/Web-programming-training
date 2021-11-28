import React, {useEffect, useState} from 'react';
import { CardStorage } from "components/CardStorage/CardStorage";
import { FilterWrapper } from "components/Filter/FilterWrapper.styled";
import { PageStyled } from "containers/Page.styled";
import { FilterInput } from 'components/Filter/FilterInput';

export const Catalogue = () => {
    const [filterName, setFilterName] = useState("");
    const [filterType, setFilterType] = useState("");
    const [filterAge, setFilterAge] = useState(undefined);
    const [filters, setFilters] = useState({name: ""});

    useEffect(() => {
        setFilters({
            name: filterName,
            type: filterType,
            age: filterAge
        })
    }, [filterName, filterType, filterAge])

    return (
        <PageStyled>
            <FilterWrapper>
                <FilterInput id="name" placeholder="Enter name..."
                             onSearch={(value) => setFilterName(value)}/>
                <FilterInput id="type" placeholder="Enter type..."
                             onSearch={(value) => setFilterType(value)}/>
                <FilterInput id="age" placeholder="Enter age..."
                             onSearch={(value) => setFilterAge(value)}/>
            </FilterWrapper>
            <CardStorage filters={filters}/>
        </PageStyled>
    )
}
