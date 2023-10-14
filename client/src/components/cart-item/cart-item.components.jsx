import React from "react";
import './cart-item.styles.scss'
import { useDispatch } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import { ReactComponent as Cross } from '../../assets/cross-button-game-controller-svgrepo-com.svg'

const CartItem = ({ cartItem }) => {
    const { name, price, imageUrl, quantity } = cartItem
    const dispatch = useDispatch()
    return (
        <div className="cart-item">
            <div className="image">
                <img src={imageUrl} alt="item" />
                <div className="remove-button"
                    onClick={() => dispatch(clearItemFromCart(cartItem))}><Cross className="cross" />
                </div>
            </div>
            <div className="item-details">
                <span className="name">{name}</span>
                <div className="quantity">
                    <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>&#10094;</div>
                    <span className="price">{quantity} </span>
                    <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>&#10095;</div>
                    <span className="price">x ${price}</span>
                    <span className="price"> =${quantity * price} </span>
                </div>
            </div>
        </div>
    )
}

export default CartItem