import React from 'react';
import {TShopItem} from "@types";

import './collection-item.styles.scss'

const CollectionItem = ({name,id,imageUrl,price}: TShopItem) => {
    return (
        <div className='collection-item'>
            <div className="image"
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            >
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    );
};

export default CollectionItem;
