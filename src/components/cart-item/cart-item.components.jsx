import React from "react";
import './cart-item.styles.scss'
import { connect } from "react-redux";
import { addItem, clearItemFromCart, removeItem } from "../../redux/cart/cart.actions";
import { ReactComponent as Cross } from '../../assets/cross-button-game-controller-svgrepo-com.svg'

const CartItem = ({ cartItem, addItem, removeItem, clearItemFromCart }) => {
    const { name, price, imageUrl, quantity } = cartItem
    return (
        <div className="cart-item">
            <div className="image">
                <img src={imageUrl} alt="item" />
                <div className="remove-button"
                    onClick={() => clearItemFromCart(cartItem)}><Cross className="cross"/>
                </div>
            </div>
            <div className="item-details">
                <span className="name">{name}</span>
                <div className="quantity">
                    <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                    <span className="price">{quantity} </span>
                    <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
                    <span className="price">x ${price}</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
    clearItemFromCart: (item) => dispatch(clearItemFromCart(item))
})

export default connect(null, mapDispatchToProps)(CartItem)