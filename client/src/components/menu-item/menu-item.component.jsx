import React from "react";
import './menu-item.styles.scss'
import { useHistory, useRouteMatch} from "react-router-dom/cjs/react-router-dom.min";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const history = useHistory()
    const match = useRouteMatch()
    return (
        <div className={`${size} menu-item`} onClick={() => { history.push(`${match.url}${linkUrl}`) }}>
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem