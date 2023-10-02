import { Route, Switch, Redirect } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";
import HomePage from "./pages/homepage/homepage.pages";
import ShopPage from "./pages/shop/shop.pages";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sing-up.pages";
import CheckoutPage from "./pages/checkout/checkout.pages";
import CollectionPage from "./pages/collection/collection.pages";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { checkUserSession } from "./redux/user/user.actions";
import SignOut, { SignOutMessage } from "./pages/sign-in-and-sign-up/sign-out.pages";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/shop/:collection" component={CollectionPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() => {
            return currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />;
          }}
        />
          <Route exact path="/signout" component={SignOut} />
          <Route exact path="/visitagain" component={SignOutMessage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
