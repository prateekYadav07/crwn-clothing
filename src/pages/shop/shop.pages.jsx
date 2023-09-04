import React, { Component } from "react";
import CollectionOverviewComponents from "../../components/collections-overview/collection-overview.components";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { updateCollections } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection("collections")
        collectionRef.onSnapshot(async (snapshot) => {
            updateCollections(convertCollectionSnapshotToMap(snapshot));
        })
    }

    render() {
        return (
            <div className="shop-page">
                <CollectionOverviewComponents />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)