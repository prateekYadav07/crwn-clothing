import React from "react";
import CollectionOverviewComponents from "../../components/collections-overview/collection-overview.components";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import Collection from "../collection/collection.pages";

const ShopPage = ({ match }) => {
    return (
        <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewComponents} />
                <Route path={`${match.path}/:categoryId`} component={Collection} />
        </div>
    )
}

export default ShopPage