import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.components";
import { convertCollectionSnapshotToMap, firestore } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { setLoading, updateCollections } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { createStructuredSelector } from "reselect";
import { selectLoading } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)

class ShopPage extends Component {
    unSubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections, setLoading } = this.props
        const collectionRef = firestore.collection("collections")

        //actual way of dealing with apis using fetch and promise
        // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-e373b/databases/(default)/documents/collections")
        //     .then(res => res.json())
        //     .then(collection => console.log(collection))

        // this is a promise based pattern (but still using firestore snapshot)
        collectionRef.get().then(async (snapshot) => {
            const collectionMap = convertCollectionSnapshotToMap(snapshot)
            updateCollections(collectionMap)
            setLoading(false)
        })

        // this is an observable/observer pattern
        // collectionRef.onSnapshot(async (snapshot) => {
        //     const collectionMap = convertCollectionSnapshotToMap(snapshot)
        //     console.log(collectionMap);
        //     updateCollections(collectionMap)
        //     setLoading(false)
        // })
    }

    render() {
        return (
            <div className="shop-page">
                <CollectionOverviewWithSpinner isLoading={this.props.loading} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    loading: selectLoading
})

const mapDispatchToProps = (dispatch) => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
    setLoading: loading => dispatch(setLoading(loading))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)