import React from 'react';

import './preview-collections.styles.scss'
import {TShopItem, TShopData} from "@types";

const CollectionPreview = ({title, items}: TShopData) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map((item: TShopItem) =>(
                    <div key={item.id}>{item.name}</div>
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
