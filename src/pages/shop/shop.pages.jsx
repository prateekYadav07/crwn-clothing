import React from "react";
import CollectionOverviewComponents from "../../components/collections-overview/collection-overview.components";
import { Route } from "react-router-dom/cjs/react-router-dom.min";

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className="shop-page">
            <CollectionOverviewComponents />
        </div>
    )
}

export default ShopPage