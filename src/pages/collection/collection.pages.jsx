import React from "react";
import './collection.styles.scss'
import { connect } from "react-redux";
import { selectCollection, selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.components"
import WithSpinner from "../../components/with-spinner/with-spinner.components";

const CollectionView = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

const CollectionViewWithSpinner = WithSpinner(CollectionView)

const CollectionPage = (props) => {
    const { isCollectionLoaded } = props
    return (
        <CollectionViewWithSpinner isLoading={isCollectionLoaded} {...props} />
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collection)(state),
    isCollectionLoaded: selectIsCollectionLoaded(state)
})

export default connect(mapStateToProps)(CollectionPage)