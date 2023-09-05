import React from "react";
import './collection-preview.styles.scss'
import CollectionItem from "../collection-item/collection-item.components";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const CollectionPreview = ({ title, items, history, match }) => {
    return (
        <div className="collection-preview">
            <h1 className="title" onClick={() => { history.push(`${match.url}/${items.routeName}`) }}>{title.toUpperCase()}</h1>
            <div className="preview">
                {
                    items
                        .filter((item, index) => index < 4)
                        .map((item) => {
                            return <CollectionItem key={item.id} item={item} />
                        })
                }
            </div>
        </div>
    )
}

export default withRouter(CollectionPreview)
