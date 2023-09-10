import { compose } from "redux";
import CollectionView from "./collections-view.component";
import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.components";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionLoaded } from "../../redux/shop/shop.selectors";

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionLoaded
})

const CollectionViewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionView)

export default CollectionViewContainer