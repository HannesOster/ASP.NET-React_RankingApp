﻿import React, { useState, useEffect } from 'react';
import MovieImageArray from './MovieImages';
import RankingGrid from './RankingGrid'
import ItemCollection from './ItemCollection';


const RankItems = () => {
    const [items, setItems] = useState([]);
    const dataType = 1;

    function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    function allowDrop(ev) {
        ev.preventDefault();
    }

    function drop(ev) {

        ev.preventDefault();
        const targetElm = ev.target;
        if (targetElm.nodeName === "IMG") {
            return false;
        }
        if (targetElm.childNodes.length === 0) {
            var data = parseInt(ev.dataTransfer.getData("text").substring(5));
            const transformedCollection = items.map((item) => (item.id === parseInt(data)) ?
                { ...item, ranking: parseInt(targetElm.id.substring(5)) } : { ...item, ranking: item.ranking });
            setItems(transformedCollection);
        }

    }

    useEffect(() => {
        fetch(`item/${dataType}`)
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setItems(data);
            })
    }, [])
    return (
        <main>
            <RankingGrid items={items} imgArray={MovieImageArray} drag={drag} allowDrop={allowDrop} drop={drop} />
            <ItemCollection items={items} drag={drag} imgArray={MovieImageArray} />
        </main>
    )


}

export default RankItems;