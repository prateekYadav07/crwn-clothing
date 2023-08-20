import React from "react";
import './checkout.styles.scss'
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckoutItem from "../../components/checkout-item/checkout-item.components";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.components";

const CheckoutPage = ({ cartItems, cartTotal }) => {
    const headers = ['Product', 'Description', 'Quantity', 'Price', 'Remove']
    return (
        <div className="checkout-page">
            {
                cartItems.length
                    ?
                    <>
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
                        <div className="test-warning">
                            *Please use the following for test credit card payments*
                            <br />
                            VISA: <b>4242 4242 4242 4242</b>
                            <br />
                            MASTERCARD: <b>5555 5555 5555 4444</b>
                            <br />
                            Exp: Any Future Date, CVV: Any 3 Digits
                        </div>
                        <StripeCheckoutButton price={cartTotal} />
                    </>
                    :
                    <>
                        <div className="empty-cart">
                            Nothing to show here, Please add something to the cart
                        </div>
                    </>
            }
        </div >
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)