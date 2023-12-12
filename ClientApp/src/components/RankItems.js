import React, { useState, useEffect } from 'react';
import MovieImageArray from './MovieImages';
import RankingGrid from './RankingGrid'


const RankItems = () => {
    const [items, setItems] = useState([]);

    const dataType = 1;
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
            <RankingGrid items={items} imgArr={MovieImageArray} />
            <div className="items-not-ranked">
                {
                    (items != null) ? items.map((item) =>
                        <div className="unranked-cell">
                            <img id={`item-${item.id}`} src={MovieImageArray.find(img => img.id === item.imageId)?.image} />
                        </div>) : <div>Loading...</div>
                }
            </div >
        </main>
    )


}

export default RankItems;