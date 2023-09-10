import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";

class ShopPage extends Component {
    componentDidMount() {
        this.props.collectionFetchStartAsync()
    }

    render() {
        return (
            <div className="shop-page">
                <CollectionOverviewContainer/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    collectionFetchStartAsync: () => { dispatch(fetchCollectionStartAsync()) }
})

export default connect(null, mapDispatchToProps)(ShopPage)