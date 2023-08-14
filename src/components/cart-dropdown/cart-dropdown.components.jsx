import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.components";
import { connect } from "react-redux";

const CartDropdown = ({cartItems}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.map(cartItem => {
                        return <CartItem key={cartItem.id} {...cartItem}/>
                    })
                }
            </div>
            <CustomButton>CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: {cartItems} }) => ({
    cartItems: cartItems
})

export default connect(mapStateToProps)(CartDropdown)