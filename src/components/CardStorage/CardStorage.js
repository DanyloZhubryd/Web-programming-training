import React, {useEffect, useState} from 'react';
import {getBirdList} from "API/API" 
import { getBirdCards } from 'containers/Catalogue/CatalogueDOM';
import { CardStorageStyled } from './CardStorage.styled';
import { Loader } from 'components/loader/Loader';
import { Button } from 'antd';

export const CardStorage = ({birdNum, birdIncrement=1, style, filters}) => {
    const [birdListSize, setBirdListSize] = useState(birdNum ? birdNum: 0);
    const [birdList, setBirdList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filter, setFilter] = useState({});

    useEffect( () => {
        setFilter(filters ? filters : {})
    }, [filters]);

    useEffect (() => {
        getBirdList(filter.type, filter.name, filter.age)
            .then(
                receivedBirdList => {
                    if (birdListSize === 0) {
                        setBirdList(receivedBirdList)
                    }
                    else setBirdList(receivedBirdList.slice(0, birdListSize))
                    setIsLoaded(true)

                }
            )
            .catch( () =>  {
                console.log("Error occurred during loading data from server");
            })
    }, [birdListSize, filter]);
    return (
        <div style={style}>
            <CardStorageStyled>
                {
                    (birdList.length !== 0) ?
                        getBirdCards(birdList) :
                            isLoaded ? <h2>Nothing found</h2> : <Loader />
                }
            </CardStorageStyled>
            <div style={{width:"10%", margin:"auto"}}>{
                !(birdListSize === 0 || birdListSize > birdList.length) &&
                <Button onClick={() => setBirdListSize(birdListSize+birdIncrement)}>Show more...</Button>
            }
            </div>
        </div>
    );
}