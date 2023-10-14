import React from "react";
import './collection-overview.styles.scss'
import {  useSelector } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import {  selectCollectionsArray } from "../../redux/shop/shop.selectors";

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsArray)
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollProps }) => {
                return <CollectionPreview key={id} {...otherCollProps} />
            })}
        </div>
    )
}

export default CollectionsOverview