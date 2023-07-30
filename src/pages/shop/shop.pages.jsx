import React, { Component } from "react";
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {collections.map(({ id, ...otherCollProps }) => {
                    return <CollectionPreview key={id} {...otherCollProps} />
                })}
            </div>
        )
    }
}

export default ShopPage