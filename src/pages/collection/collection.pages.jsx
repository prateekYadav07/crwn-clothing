import React from "react";
import './collection.styles.scss'
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

const CollectionPage = ({ collection }) => {
    console.log(collection);
    return (
        <div className="collection-page">
            COLLECTION
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collection)(state)
})

export default connect(mapStateToProps)(CollectionPage)