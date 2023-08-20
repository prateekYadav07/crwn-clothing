import React from "react";
import './collection-overview.styles.scss'
import { connect } from "react-redux";
import CollectionPreview from "../collection-preview/collection-preview.component";
import { createStructuredSelector } from "reselect";
import {  selectCollectionsArray } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ collections }) => {
    return (
        <div className="collections-overview">
            {collections.map(({ id, ...otherCollProps }) => {
                return <CollectionPreview key={id} {...otherCollProps} />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsArray
})

export default connect(mapStateToProps)(CollectionsOverview)