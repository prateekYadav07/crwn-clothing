import React, { Component } from "react";
import CollectionsOverview from "../../components/collections-overview/collection-overview.components";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/with-spinner/with-spinner.components";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview)

class ShopPage extends Component {
    componentDidMount() {
        this.props.collectionFetchStartAsync()
    }

    render() {
        return (
            <div className="shop-page">
                <CollectionOverviewWithSpinner isLoading={this.props.isFetching} />
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching
})

const mapDispatchToProps = (dispatch) => ({
    collectionFetchStartAsync: () => { dispatch(fetchCollectionStartAsync()) }
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)