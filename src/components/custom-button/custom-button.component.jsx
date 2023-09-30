import React from "react";
// import './custom-button.styles'
import { CustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...otherProps }) => {
    return (
        <CustomButtonContainer {...otherProps}>
            {children}
        </CustomButtonContainer>
    )
}

export default CustomButton
