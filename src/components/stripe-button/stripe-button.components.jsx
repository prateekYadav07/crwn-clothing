import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = "pk_test_51Nh3l7SD9DUYhrhxOZKxxX7qqsgIbllxqALdYBwKcDzzjClSIzdmyoJ9jRLGQWaBN0wnok6pKydxctALUq2t2Zmq00AoBOvBWD"

    const onToken = (token) => {
        console.log(token);
        alert('payment succesful')
    }

    return (
        <StripeCheckout
            amount={priceForStripe}
            label="Pay Now"
            name="CRWN clothing ltd."
            stripeKey={publishableKey}
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total payment pending is ${price}`}
            panelLabel="Pay Now"
            token={(token) => onToken(token)}
        />
    )

}

export default StripeCheckoutButton
