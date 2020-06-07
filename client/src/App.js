import React, { Component } from "react";
import "./App.css";
// import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jwtDecoder from "jwt-decode";
import AppNavBar from "./components/all/mainNavBar/AppNavBar";
import Footer from "./components/all/footer/Footer";
import { Route, Switch } from "react-router-dom";
// import Section1 from "./components/shop/homepage/Section1";
// import Section2 from "./components/shop/homepage/Section2";
// import reducer from "./store/reducers/reducer";
// import { Provider } from "react-redux";
// import * as actio from "./store/actionCreator/actionCreators";
// import { configureStore } from "@reduxjs/toolkit";
// import Jumbo from "./components/shop/homepage/Jumbo";
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

// const item4 = {
//   productCode: 5653,
//   name: "open back gown",
//   materials: ["cotton", "polyester"],
//   colors: ["red", "maroon"],
//   style: "open sidesllit",
//   description: "see through",
//   category: "lingerie",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90323981_900933913684257_3698075662973847508_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ecywxbX6DesAX88ou00&oh=ad7e98df999920b5a16a4c914997823c&oe=5ED5982B"
// };
// const item5 = {
//   productCode: 98563,
//   name: "morning brunch",
//   materials: ["satin"],
//   colors: ["white", "grey"],
//   style: "asymetric gown",
//   description: "sexy coperate",
//   category: "brunch wear",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90396312_140123414108773_3484098825815952962_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=wgR4LN5S2qwAX92F1be&oh=616a6a6000af5794d6e59071c958fe58&oe=5ED889AF"
// };
// const item6 = {
//   productCode: 98525,
//   name: "sleeptight",
//   materials: ["wool"],
//   colors: ["white"],
//   style: "pjs",
//   description: "comfy robe",
//   category: "sleepwear",
//   url:
//     "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90858843_861041334368901_3822460967506326527_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=YpICzfi3GGIAX-UIT5k&oh=f32421f40538884e83dbe6fe5aec145f&oe=5ED86254"
// };

// myStore.dispatch(actio.itemAdded(item1));
// myStore.dispatch(actio.itemAdded(item2));
// myStore.dispatch(actio.itemAdded(item3));
// myStore.dispatch(actio.itemAdded(item4));
// myStore.dispatch(actio.itemAdded(item5));
// myStore.dispatch(actio.itemAdded(item6));
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

class App extends Component {
  state = {
    cart: [],
    products: [],
    sendProducts: [],
    currentPage: 1,
    pageSize: 9
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

    // this.populateState();
  }

  // async populateState() {
  //   try {
  //     const products = await axios.get("/api/product/");

  //     this.setState({ products: products.data });
  //   } catch (err) {
  //     // this.populateState();
  //   }
  // }
  render() {
    return (
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
          <Route path="/profilePage" component={ProfilePage}></Route>
          <Route path="/sellerSignUp" component={SellerSignUp}></Route>
          <Route path="/sellerSignIn" component={SellerSignInPage}></Route>
          <Route path="/sellerHomePage" component={SellerHomePage}></Route>
          <Route path="/sellerDashBoard" component={SellerDasboard}></Route>
          <Route path="/payStackRDR" component={PayStackPortal}></Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* </Provider> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
