import CollectionItem from "../collection-item/collection-item.components"
import { selectCollection } from "../../redux/shop/shop.selectors"
import { useSelector } from "react-redux"
import './collection.styles.scss'
import { useParams } from "react-router-dom/cjs/react-router-dom.min"

const CollectionView = () => {
    const { collection } = useParams()
    const collectionItem = useSelector(selectCollection(collection))
    const { title, items } = collectionItem
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

export default CollectionView