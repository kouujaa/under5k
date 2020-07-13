import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecoder from "jwt-decode";
import AppNavBar from "./components/all/mainNavBar/AppNavBar";
import Footer from "./components/all/footer/Footer";
import { Route, Switch, Redirect } from "react-router-dom";

// import config from "config";

// import reducer from "./store/reducers/reducer";
// import { Provider } from "react-redux";
// import * as actio from "./store/actionCreator/actionCreators";
// import { configureStore } from "@reduxjs/toolkit";
// const myStore = configureStore({ reducer });
// const item1 = {
//   productCode: 53186,
//   name: "fish net gown",
//   materials: ["cotton"],
//   colors: ["orange", "pink", "green"],
//   style: "crop top",
//   description: "low cut miniskirt with slit",
//   category: "top",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_155090732623218_4909097977760666215_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6TcX_6ME5xwAX-ZL-Nd&oh=b89b1a0c67d6911dc64777b73ca80f37&oe=5ED5D1BD"
// };
// const item2 = {
//   productCode: 65483,
//   name: "starry jeans",
//   materials: ["denim"],
//   colors: ["red", "blue"],
//   style: "cut up jeans",
//   description: "patterned skinny low jeans",
//   category: "skinny jeans",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/91084754_216018266383112_7200314527193148546_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ciRwqSLzVUMAX9DZXz5&oh=1618145295e3fb7a4ea5de45280da0da&oe=5ED7A05B"
// };
// const item3 = {
//   productCode: 54486,
//   name: "sexy midnight turn on",
//   materials: ["satin"],
//   colors: ["black", "white"],
//   style: "open sideboob",
//   description: "sexy see through",
//   category: "lingerie",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90997707_619481025564891_1242875913331758935_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=jR1iW8RbYMoAX9V0DDP&oh=ba4440e9f32e5945a4dc13f33e95ed94&oe=5ED6F80D"
// };

// myStore.dispatch(actio.itemAdded(item1));
// myStore.dispatch(actio.itemAdded(item2));
// myStore.dispatch(actio.itemAdded(item3));

// myStore.dispatch(actio.itemRemoved(65483));

// import { BrowserRouter } from "react-router-dom";
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
class App extends Component {
  state = {
    cart: [],
    products: [],
    user: ""
  };

  clearState = () => {
    const { cookies } = this.props;

    cookies.remove("token", { path: "/" });

    window.location = "/";
  };
  componentDidMount() {
    try {
      const { cookies } = this.props;

      const jwt = cookies.get("token");

      const user = jwtDecoder(jwt);
      // console.log(user);
      this.setState({ user });
    } catch (err) {}

    this.populateState();
  }

  async populateState() {
    try {
      const products = await axios.get("/api/product/");

      this.setState({ products: products.data });
    } catch (err) {}
  }
  s;
  render() {
    const { cookies } = this.props;
    console.log(cookies);
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
                  return <Redirect to="/unauthorized" />;
                return (
                  <SellerDasboard cookies={this.props.cookies} {...props} />
                );
              }}
            />
            {/* <Route
              path="/payStackRDR"
              render={...props => {
                if (this.state.user.status !== "user")
                  return <Redirect to="/unauthorized" />;
                return <PayStackPortal />;
              }}
            /> */}

            <Route
              path="/payStackRDR"
              render={props => (
                <PayStackPortal cookies={this.props.cookies} {...props} />
              )}
            />
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
