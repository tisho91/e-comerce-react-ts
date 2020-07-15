import React from 'react';

import './collection-preview.styles.scss'
import {TShopItem, TShopData} from "@types";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({title, items}: TShopData) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items.map((item: TShopItem) =>(
                    <CollectionItem key={item.id} {...item}/>
                ))}
            </div>
        </div>
    );
};

export default CollectionPreview;
