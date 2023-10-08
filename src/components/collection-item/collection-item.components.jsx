import React from "react";
import './collection-item.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item }) => {
    const { name, price, imageUrl } = item
    const dispatch = useDispatch()
    return (
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton className="custom-button"
                onClick={() => dispatch(addItem(item))}
                inverted="true">ADD TO CART</CustomButton>
        </div>
    )
}

export default CollectionItem