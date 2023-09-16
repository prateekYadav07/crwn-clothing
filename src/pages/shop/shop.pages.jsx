import React, { Component } from "react";
import { connect } from "react-redux";
import CollectionOverviewContainer from "../../components/collections-overview/collection-overview.container";
import { fetchCollectionStart } from "../../redux/shop/shop.actions";

class ShopPage extends Component {
    componentDidMount() {
        this.props.fetchCollectionStart()
    }

    render() {
        return (
            <div className="shop-page">
                <CollectionOverviewContainer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})

export default connect(null, mapDispatchToProps)(ShopPage)