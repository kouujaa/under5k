import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecoder from "jwt-decode";
import AppNavBar from "./components/all/mainNavBar/AppNavBar";
// import { Modal } from "reactstrap";
import Footer from "./components/all/footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/shop/homepage/Homepage";
import SignUpForm from "./components/shop/signup/SignUpForm";
import SignInForm from "./components/shop/signup/SignInForm";
import ContactPage from "./components/shop/contact/ContactPage";
import ProductPage from "./components/store/ProductPage";
import CheckOut from "./components/store/CheckOut";
import _ from "lodash";
import ProfilePage from "./components/shop/userInfo/ProfilePage";
import SellerSignUp from "./components/sellers/SellerSignUpPage";
import SellerSignInPage from "./components/sellers/SellerSignInPage";
import SellerHomePage from "./components/sellers/SellerHomePage";
import { withCookies } from "react-cookie";
import PayStackPortal from "./components/store/PayStackPortal";
import SellerDasboard from "./components/sellers/SellerDashboard";
import UserAgreement from "./components/resourceStore/UserAgreement";
import SellerAgreement from "./components/resourceStore/SellerAgreement";
import StoreFront from "./components/store/sellerFront/StoreFront";
import ProductContext from "./contexts/productContext";
import Page403 from "./components/errorsnauth/Page403";
import Page404 from "./components/errorsnauth/Page404";
import Page500 from "./components/errorsnauth/Page500";
import Page403User from "./components/errorsnauth/Page403User";
import SingleProductView from "./components/store/SingleProductView";
import ShowCart from "./components/store/ShowCart";
class App extends Component {
  state = {
    cart: [],
    products: [],
    user: "",
    message: ""
  };

  clearState = () => {
    const { cookies } = this.props;

    cookies.remove("token", { path: "/" });

    window.location = "/home";
  };

  //CART TRAIL

  removeFromCart = id => {
    const cart = this.state.cart.filter(item => item.productID !== id);
    this.setState({ cart });
  };
  //add item to cart
  addToCart = (productID, description, size, price, URI, seller, user) => {
    const cart = [...this.state.cart];
    const addProduct = {
      quantity: 1,
      productID,
      description,
      size,
      price,
      URI: URI,
      seller
    };
    const found = _.find(cart, { productID });
    if (found) {
      return;
    }
    cart.push(addProduct);
    this.setState({ cart });
  };
  //TRAIL CART END
  componentDidMount() {
    try {
      const { cookies } = this.props;

      const jwt = cookies.get("token");

      const user = jwtDecoder(jwt);

      this.setState({ user });
    } catch (err) {}

    this.populateState();
  }

  async populateState() {
    try {
      const products = await axios.get("/api/product/available");

      this.setState({ products: products.data });
    } catch (err) {}
  }

  render() {
    const { cookies } = this.props;
    const cartFunctions = {
      addToCart: this.addToCart,
      removeFromCart: this.removeFromCart
    };
    // const { message } = this.state;
    return (
      <ProductContext.Provider
        value={{
          products: this.state.products,
          user: this.state.user,
          cart: this.state.cart,
          cartFunctions: {
            addToCart: this.addToCart,
            removeFromCart: this.removeFromCart
          }
        }}
      >
        <React.Fragment>
          {/* <Provider store={myStore}> */}
          <AppNavBar
            user={this.state.user}
            clearState={this.clearState}
            shopCart={this.state.cart}
          />
          {/* {message ? <modal>{message}</modal> : null} */}

          {/* <div className="container center"> */}
          <Switch>
            <Route
              path="/shop"
              render={props => {
                if (this.state.user.status === "seller")
                  return <Redirect to="/signIn" />;
                return (
                  <ProductPage
                    shopCart={this.state.cart}
                    cookies={cookies}
                    {...props}
                    cartFunctions={cartFunctions}
                  />
                );
              }}
            />

            {/* <Route
              path="/shop"
              render={props => <ProductPage cookies={cookies} {...props} />}
            /> */}

            <Route
              path="/signUp"
              render={props => (
                <SignUpForm
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/signIn"
              render={props => (
                <SignInForm
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/contact"
              render={props => (
                <ContactPage
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />

            <Route
              path="/checkOut"
              render={props => (
                <CheckOut
                  cookies={cookies}
                  {...props}
                  cartFunctions={cartFunctions}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/profilePage"
              render={props => {
                if (this.state.user.status === "seller")
                  return (
                    <Redirect
                      to="/sellerDashBoard/shopdetails"
                      shopCart={this.state.cart}
                    />
                  );
                return <ProfilePage cookies={cookies} {...props} />;
              }}
            />

            {/* <Route path="/profilePage" component={ProfilePage}></Route> */}
            <Route
              path="/sellerSignUp"
              render={props => (
                <SellerSignUp
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            {/* <Route
              path="/sellerSignIn"
              render={props => (
                <SellerSignInPage
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            /> */}
            <Route
              path="/sellerSignIn"
              render={props => {
                if (this.state.user.status === "seller")
                  return <Redirect to="/sellerDashBoard" />;
                return (
                  <SellerSignInPage
                    cookies={cookies}
                    {...props}
                    shopCart={this.state.cart}
                  />
                );
              }}
            />
            <Route
              path="/sellerHomePage"
              render={props => {
                if (this.state.user.status !== "seller")
                  return <Redirect to="/sellerSignIn" />;
                return (
                  <SellerHomePage
                    cookies={cookies}
                    {...props}
                    shopCart={this.state.cart}
                  />
                );
              }}
            />

            {/* <Route
              path="/sellerDashBoard"
              render={props => <SellerDasboard cookies={cookies} {...props} />}
            /> */}
            <Route
              path="/sellerDashBoard"
              render={props => {
                // if (this.state.user.status !== "seller")
                //   return <Redirect to="/" />;
                return (
                  <SellerDasboard
                    cookies={cookies}
                    {...props}
                    shopCart={this.state.cart}
                  />
                );
              }}
            />

            <Route
              path="/payStackRDR"
              render={props => {
                if (this.state.user.status !== "user")
                  return <Redirect to="/unauthorized2" />;
                return (
                  <PayStackPortal
                    cookies={cookies}
                    {...props}
                    shopCart={this.state.cart}
                  />
                );
              }}
            />

            {/* <Route
              path="/payStackRDR"
              render={props => (
                <PayStackPortal cookies={cookies} {...props} />
              )}
            /> */}
            <Route
              path="/userAgreement"
              render={props => (
                <UserAgreement
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />

            <Route
              path="/showCart"
              render={props => <ShowCart cookies={cookies} {...props} />}
            />
            <Route
              path="/sellerAgreement"
              render={props => (
                <SellerAgreement
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />

            <Route
              path="/unauthorized"
              render={props => (
                <Page403
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/unauthorized2"
              render={props => (
                <Page403User
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/productView"
              render={props => (
                <SingleProductView
                  {...props}
                  cartFunctions={cartFunctions}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/serverError"
              render={props => (
                <Page500
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/notFound"
              render={props => (
                <Page404
                  cookies={cookies}
                  {...props}
                  shopCart={this.state.cart}
                />
              )}
            />
            <Route
              path="/store/:sellerName"
              render={props => (
                <StoreFront
                  shopCart={this.state.cart}
                  cookies={cookies}
                  {...props}
                  cartFunctions={cartFunctions}
                />
              )}
            />
            <Redirect from="/store" to="/shop" />

            <Route
              exact
              path="/"
              render={props => (
                <Home cookies={cookies} {...props} shopCart={this.state.cart} />
              )}
            />

            <Route
              exact
              path="/home"
              render={props => (
                <Home cookies={cookies} {...props} shopCart={this.state.cart} />
              )}
            />

            <Redirect to="/notFound" />
          </Switch>
          {/* </div> */}
          {/* </Provider> */}
          <Footer />
        </React.Fragment>
      </ProductContext.Provider>
    );
  }
}

export default withCookies(App);
