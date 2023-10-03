import React from "react";
import './cart-dropdown.styles.scss'
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.components";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropdown = ({ history }) => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ?
                        cartItems.map(cartItem => {
                            return <CartItem key={cartItem.id} cartItem={cartItem} />
                        })
                        : <span className="empty-message">Your cart is empty</span>
                }
            </div>
            <CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }}>CHECKOUT</CustomButton>
        </div>
    )
}

export default withRouter(CartDropdown)