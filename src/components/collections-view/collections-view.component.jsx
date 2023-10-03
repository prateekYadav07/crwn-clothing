import CollectionItem from "../collection-item/collection-item.components"
import { selectCollection } from "../../redux/shop/shop.selectors"
import { connect, useSelector } from "react-redux"
import './collection.styles.scss'
import { compose } from "redux"
import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

const CollectionView = ({ collection }) => {
    // const collection = useSelector()
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

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collection)(state)
})

export default compose(withRouter, connect(mapStateToProps))(CollectionView)