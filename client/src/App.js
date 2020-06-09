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
    products: [
      {
        productID: 53186,
        instock: 5,
        rating: 4,
        price: 1000,
        colors: ["orange", "pink", "green"],
        sizes: "L",
        description: "low cut miniskirt with slit",
        materials: ["cotton"],
        category: "top",
        seller: "shalom",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_155090732623218_4909097977760666215_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6TcX_6ME5xwAX-ZL-Nd&oh=b89b1a0c67d6911dc64777b73ca80f37&oe=5ED5D1BD"
        ]
      },
      {
        productID: 65483,
        instock: 5,
        rating: 4,
        price: 2000,
        colors: ["red", "blue"],
        sizes: "L",
        description: "starry jeans",
        materials: ["denim"],
        category: "jeans",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/91084754_216018266383112_7200314527193148546_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ciRwqSLzVUMAX9DZXz5&oh=1618145295e3fb7a4ea5de45280da0da&oe=5ED7A05B"
        ]
      },
      {
        productID: 69883,
        instock: 9,
        rating: 7,
        price: 3000,
        colors: ["red", "blue"],
        sizes: "L",
        description: "multi colored romper",
        materials: ["polyester"],
        category: "jeans",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89733134_141233014066873_2975602050831648831_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xKPJGP6smYgAX-aVeAl&oh=44d85534a0a3bbf66d09737ae8cf7292&oe=5ED71F66"
        ]
      },
      {
        productID: 69483,
        instock: 5,
        rating: 4,
        price: 4000,
        colors: ["white"],
        sizes: "M",
        description: " see through beach wear",
        materials: ["linen"],
        category: "gown",
        seller: "juliet",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90021266_586079645316681_3381606526350380255_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yFkwTJapL8YAX_GfU5n&oh=45fdd74b44587024c61fa7d400dbe34f&oe=5ED7731E"
        ]
      },
      {
        productID: 6548893,
        instock: 5,
        rating: 5,
        price: 5000,
        colors: ["black"],
        sizes: "M",
        description: "tight fit gown",
        materials: ["linen"],
        category: "dress",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.82.661.661a/s320x320/90086117_619505202223561_867198532102346738_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=fcbs-8tPGCgAX8Q5e2Y&oh=aa212cc581107eea0e8d377603ef6b80&oe=5ED641FE"
        ]
      },
      {
        productID: 65500,
        instock: 5,
        rating: 5,
        price: 6000,
        colors: ["black"],
        sizes: "M",
        description: "tight fit gown",
        materials: ["linen"],
        category: "skirt",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_666262364202482_8127632928219732007_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5m-GR6uPBSwAX_r-XlI&oh=76f1dc3546b23be45594a83fb99f1555&oe=5ED84D0D"
        ]
      },
      {
        productID: 65501,
        instock: 5,
        rating: 5,
        price: 7000,
        colors: ["black"],
        sizes: "S",
        description: "tight fit gown",
        materials: ["linen"],
        category: "skirt",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.2.719.719a/s320x320/89848754_647360749411774_4946683316704267871_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=amkvxXp2JyMAX86syzO&oh=462d9b20b176e30fb5e04351a0fad118&oe=5ED5FFAC"
        ]
      },
      {
        productID: 65502,
        instock: 5,
        rating: 5,
        price: 8000,
        colors: ["black"],
        sizes: "S",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jeans",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89853602_300071184290426_4273885749160331035_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=k2ULCVqX8LYAX-_k8Yu&oh=427a4dd467bfa9a41e3a0d9fe856efd0&oe=5ED76AAF"
        ]
      },
      {
        productID: 65503,
        instock: 5,
        rating: 5,
        price: 9000,
        colors: ["black"],
        sizes: "S",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jeans",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.2.720.720a/s320x320/90087698_539420096683907_6744294665906325407_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-E5PPeOT13wAX8tdR8H&oh=f704cdd21774afb75c5a6b6e0b561924&oe=5ED8D65E"
        ]
      },
      {
        productID: 65504,
        instock: 5,
        rating: 5,
        price: 1001,
        colors: ["black"],
        sizes: "One size",
        description: "tight fit gown",
        materials: ["linen"],
        category: "tanktop",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.90.720.720a/s320x320/90086854_2530007643878420_5491336721729133427_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=CTe2HKDGLRMAX9aA0vl&oh=e83de7696ffef4f9138ba5174b5fbdd3&oe=5ED5F082"
        ]
      },
      {
        productID: 65505,
        instock: 5,
        rating: 5,
        price: 1002,
        colors: ["black"],
        sizes: "One size",
        description: "tight fit gown",
        materials: ["linen"],
        category: "tanktop",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89852604_655634368521569_2331432557634546236_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=BooF2XULiYEAX9hqtmi&oh=db2ac8984eab0f53517ab5191e70f13d&oe=5ED733BB"
        ]
      },
      {
        productID: 65506,
        instock: 5,
        rating: 5,
        price: 1003,
        colors: ["black"],
        sizes: "One size",
        description: "tight fit gown",
        materials: ["linen"],
        category: "bumshort",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89853352_104508647772364_3534803772972359521_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4W67dmaJV3wAX-H-8fT&oh=b17cde36a519d8861bf0cb2824de15ad&oe=5ED8483A"
        ]
      },
      {
        productID: 65507,
        instock: 5,
        rating: 5,
        price: 1004,
        colors: ["black"],
        sizes: "XS",
        description: "tight fit gown",
        materials: ["linen"],
        category: "bumshirt",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90090259_116816989933140_1302035151542800016_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kKqJKPaGNZ8AX9_9kkl&oh=df9a535196ff5d27d0a3d9dc0cc4f34a&oe=5ED6DCD4"
        ]
      },
      {
        productID: 65508,
        instock: 5,
        rating: 5,
        price: 1005,
        colors: ["black"],
        sizes: "XS",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jacket",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90025630_739432903256421_8576011492743774757_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=u_1V7vffuv4AX_xyych&oh=a67623237acb098b106757ca4f20a8e3&oe=5ED67C9B"
        ]
      },
      {
        productID: 65509,
        instock: 5,
        rating: 5,
        price: 1006,
        colors: ["black"],
        sizes: "XS",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jacket",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90416722_3163653506980920_2237475317615290862_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=cVbW9y9zNqMAX8wLn1r&oh=fa2f5c8855f271a75a82153a88670c70&oe=5ED80DDE"
        ]
      },
      {
        productID: 65501075,
        instock: 5,
        rating: 5,
        price: 1007,
        colors: ["black"],
        sizes: "XL",
        description: "tight fit gown",
        materials: ["linen"],
        category: "sweater",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89859944_3629974960377892_1453523459746156164_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SRqtyq_1bqEAX94vxUt&oh=b4fe1ccf1acc8be6a3d1191006cd17fc&oe=5ED734FF"
        ]
      },
      {
        productID: 6548359,
        instock: 5,
        rating: 5,
        price: 1008,
        colors: ["black"],
        sizes: "XL",
        description: "tight fit gown",
        materials: ["linen"],
        category: "sweater",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
        ]
      },
      {
        productID: 6548356,
        instock: 5,
        rating: 5,
        price: 1009,
        colors: ["black"],
        sizes: "XL",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jeggings",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
        ]
      },
      {
        productID: 6548355,
        instock: 5,
        rating: 5,
        price: 1010,
        colors: ["black"],
        sizes: "L",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jeggings",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
        ]
      },
      {
        productID: 6548354,
        instock: 5,
        rating: 5,
        price: 1011,
        colors: ["black"],
        sizes: "L",
        description: "tight fit gown",
        materials: ["linen"],
        category: "jeggings",
        seller: "omare",
        URI: [
          "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
        ]
      }
    ],
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
            <ProductPage products={this.state.products} />
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
            <Home products={this.state.products} />
          </Route>
        </Switch>
        {/* </Provider> */}
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
