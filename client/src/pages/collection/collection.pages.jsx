import React, { useEffect } from "react";
import CollectionViewContainer from "../../components/collections-view/collections-view.container";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";
import { connect } from "react-redux";

const CollectionPage = ({ fetchCollectionStart }) => {

    useEffect(() => {
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return (
        <CollectionViewContainer />
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(CollectionPage)