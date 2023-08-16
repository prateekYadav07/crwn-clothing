import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";

const ShopPage = ({ collections }) => {
    return (
        <div>
            {collections.map(({ id, ...otherCollProps }) => {
                return <CollectionPreview key={id} {...otherCollProps} />
            })}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage)