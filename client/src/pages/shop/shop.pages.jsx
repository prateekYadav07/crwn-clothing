import React, { useEffect } from "react";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

const ShopPage = ({ fetchCollectionStart }) => {

    useEffect(() => {
        fetchCollectionStart()
    }, [fetchCollectionStart])

    return (
        <div className="shop-page">
            <CollectionOverviewContainer />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)