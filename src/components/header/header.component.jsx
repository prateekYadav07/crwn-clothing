import React from "react";
import { connect, useSelector } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.components";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { createStructuredSelector } from "reselect";
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from "./header.styles";

const Header = () => {
    const currentUser = useSelector(selectCurrentUser)
    const hidden = useSelector(selectHidden)
    return (
        <HeaderContainer>
            <LogoContainer to="/">
                <Logo className="logo"></Logo>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/shop">CONTACT</OptionLink>
                {currentUser ?
                    <OptionLink to="/signout">SIGN OUT</OptionLink>
                    : <OptionLink to="/signin">SIGN IN</OptionLink>}
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null : <CartDropdown />
            }
        </HeaderContainer>
    )
}

export default Header
