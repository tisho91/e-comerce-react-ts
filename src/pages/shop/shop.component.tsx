import React, {Component} from 'react';
import {SHOP_DATA} from "../../mock-data/shop-data.mock";
import CollectionPreview from "../../componnents/collection-preview/collection-preview.component";
import {TShopData} from "@types";

class ShopPage extends Component<any,any> {
    constructor(props:any) {
        super(props);
        this.state = { 
            collections: SHOP_DATA
        }
    }
    render() {
        const {collections} = this.state
        return (
            <div>
                {
                    collections.map((collection: TShopData)=>(
                        <CollectionPreview key={collection.id} {...collection}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage;
