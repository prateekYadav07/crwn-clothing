import React from "react";
import './collection.styles.scss'

const CollectionPage = ({match}) => {
    const {params} = match
    console.log(params.collection);
    return (
        <div className="collection-page">
            COLLECTION
        </div>
    )
}

export default CollectionPage