import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecoder from "jwt-decode";
import AppNavBar from "./components/all/mainNavBar/AppNavBar";
import Footer from "./components/all/footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/shop/homepage/Homepage";
import SignUpForm from "./components/shop/signup/SignUpForm";
import SignInForm from "./components/shop/signup/SignInForm";
import ContactPage from "./components/shop/contact/ContactPage";
import ProductPage from "./components/store/ProductPage";
import CheckOut from "./components/store/CheckOut";
import ProfilePage from "./components/shop/userInfo/ProfilePage";
import SellerSignUp from "./components/sellers/SellerSignUpPage";
import SellerSignInPage from "./components/sellers/SellerSignInPage";
import SellerHomePage from "./components/sellers/SellerHomePage";
import { withCookies, Cookies } from "react-cookie";
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
class App extends Component {
  state = {
    cart: [],
    products: [],
    user: ""
  };

  clearState = () => {
    const { cookies } = this.props;

    cookies.remove("token", { path: "/" });

    window.location = "/home";
  };
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
    return (
      <ProductContext.Provider
        value={{ products: this.state.products, user: this.state.user }}
      >
        <React.Fragment>
          {/* <Provider store={myStore}> */}
          <AppNavBar user={this.state.user} clearState={this.clearState} />
          <Switch>
            <Route
              path="/shop"
              render={props => (
                <ProductPage cookies={this.props.cookies} {...props} />
              )}
            />

            <Route
              path="/signUp"
              render={props => (
                <SignUpForm cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/signIn"
              render={props => (
                <SignInForm cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/contact"
              render={props => (
                <ContactPage cookies={this.props.cookies} {...props} />
              )}
            />

            <Route
              path="/checkOut"
              render={props => (
                <CheckOut cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/profilePage"
              render={props => {
                if (this.state.user.status === "seller")
                  return <Redirect to="/sellerDashBoard/shopdetails" />;
                return <ProfilePage cookies={this.props.cookies} {...props} />;
              }}
            />

            {/* <Route path="/profilePage" component={ProfilePage}></Route> */}
            <Route
              path="/sellerSignUp"
              render={props => (
                <SellerSignUp cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/sellerSignIn"
              render={props => (
                <SellerSignInPage cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/sellerHomePage"
              render={props => (
                <SellerHomePage cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/sellerDashBoard"
              render={props => {
                if (this.state.user.status !== "seller")
                  return <Redirect to="/sellerSignIn" />;
                return (
                  <SellerDasboard cookies={this.props.cookies} {...props} />
                );
              }}
            />

            <Route
              path="/payStackRDR"
              render={props => {
                if (this.state.user.status === "seller")
                  return <Redirect to="/unauthorized2" />;
                return (
                  <PayStackPortal cookies={this.props.cookies} {...props} />
                );
              }}
            />

            {/* <Route
              path="/payStackRDR"
              render={props => (
                <PayStackPortal cookies={this.props.cookies} {...props} />
              )}
            /> */}
            <Route
              path="/userAgreement"
              render={props => (
                <UserAgreement cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/sellerAgreement"
              render={props => (
                <SellerAgreement cookies={this.props.cookies} {...props} />
              )}
            />

            <Route
              path="/unauthorized"
              render={props => (
                <Page403 cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/unauthorized2"
              render={props => (
                <Page403User cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/serverError"
              render={props => (
                <Page500 cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/notFound"
              render={props => (
                <Page404 cookies={this.props.cookies} {...props} />
              )}
            />
            <Route
              path="/store/:sellerName"
              render={props => (
                <StoreFront cookies={this.props.cookies} {...props} />
              )}
            />
            <Redirect from="/store" to="/shop" />

            <Route
              exact
              path="/"
              render={props => <Home cookies={this.props.cookies} {...props} />}
            />

            <Route
              exact
              path="/home"
              render={props => <Home cookies={this.props.cookies} {...props} />}
            />

            <Redirect to="/notFound" />
          </Switch>
          {/* </Provider> */}
          <Footer />
        </React.Fragment>
      </ProductContext.Provider>
    );
  }
}

export default withCookies(App);
