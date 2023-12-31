﻿import Item from './Item';

const ItemCollection = ({ items, drag, imgArray }) => {
    return <div className="items-not-ranked">
        {
            (items.length > 0) ? items.map((item) =>
                (item.ranking === 0) ?
                    <Item item={item} drag={drag} itemImgObj={imgArray.find(o=>o.id === item.imageId)} /> :null
            ) : <div>Loading...</div>
        }
    </div >
}

export default ItemCollection;