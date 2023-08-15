import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";

const CheckoutPage = ({ cartItems, cartTotal }) => {
    const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                {
                    headers.map(header => {
                        return (
                            <div className="header-block">
                                <span>{header}</span>
                            </div>
                        )
                    })
                }
            </div>
            {
                cartItems.map((item) => {
                    return <CheckoutItem key={item.id} cartItem={item} />
                })
            }
            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)