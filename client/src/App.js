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
import PayStackPortal from "./components/store/PayStackPortal";
import SellerDasboard from "./components/sellers/SellerDashboard";
import UserAgreement from "./components/resourceStore/UserAgreement";
import SellerAgreement from "./components/resourceStore/SellerAgreement";
import StoreFront from "./components/store/sellerFront/StoreFront";
import ProductContext from "./contexts/productContext";
import page403 from "./components/errorsnauth/Page403";
import Page404 from "./components/errorsnauth/Page404";
import Page500 from "./components/errorsnauth/Page500";
class App extends Component {
  state = {
    cart: [],
    products: [],
    user: ""
  };

  clearState = () => {
    localStorage.clear();
    window.location = "/";
  };
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
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
    return (
      <ProductContext.Provider
        value={{ products: this.state.products, user: this.state.user }}
      >
        <React.Fragment>
          {/* <Provider store={myStore}> */}
          <AppNavBar user={this.state.user} clearState={this.clearState} />
          <Switch>
            <Route path="/shop">
              <ProductPage />
            </Route>
            <Route path="/signUp" component={SignUpForm}></Route>
            <Route path="/signIn" component={SignInForm}></Route>
            <Route path="/contact" component={ContactPage}></Route>

            <Route path="/checkOut" component={CheckOut}></Route>
            <Route
              path="/profilePage"
              render={props => {
                if (this.state.user.status === "seller")
                  return <Redirect to="/sellerDashBoard/shopdetails" />;
                return <ProfilePage />;
              }}
            />

            {/* <Route path="/profilePage" component={ProfilePage}></Route> */}
            <Route path="/sellerSignUp" component={SellerSignUp}></Route>
            <Route path="/sellerSignIn" component={SellerSignInPage}></Route>
            <Route path="/sellerHomePage" component={SellerHomePage}></Route>
            <Route
              path="/sellerDashBoard"
              render={props => {
                if (this.state.user.status !== "seller")
                  return <Redirect to="/unauthorized" />;
                return <SellerDasboard />;
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

            <Route path="/payStackRDR" component={PayStackPortal}></Route>
            <Route path="/userAgreement" component={UserAgreement}></Route>
            <Route path="/sellerAgreement" component={SellerAgreement}></Route>

            <Route path="/unauthorized" component={page403}></Route>
            <Route path="/serverError" component={Page500}></Route>
            <Route path="/notFound" component={Page404}></Route>
            <Route path="/store/:sellerName" component={StoreFront}></Route>
            <Redirect from="/store" to="/shop" />
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>

            <Redirect to="/notFound" />
          </Switch>
          {/* </Provider> */}
          <Footer />
        </React.Fragment>
      </ProductContext.Provider>
    );
  }
}

export default App;
