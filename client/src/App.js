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
import EditProfile from "./components/shop/userInfo/EditProfile";

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
        category: "Dresses",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90955382_823442644817804_1768660103671081696_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=CQOU00yMEd8AX8Fscam&oh=1ad08efc00fe56c671c3a12b5a48cf42&oe=5F0A93E7"
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
        category: "Dresses",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/91084754_216018266383112_7200314527193148546_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=xcJBBNTmjfgAX-7P-Xk&oh=6edbb68c55408ce10cf45422d6562caa&oe=5F0D5A81"
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
        category: "Dresses",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/91223237_2924803864268059_8935380029980255900_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=-sf0KzlAi_gAX-jUk_I&oh=e327c0d52b6d24004057fb0b5ad9c316&oe=5F0B2C42"
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
        category: "Jumpsuits",
        seller: "juliet",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90722565_1657119107770538_4954832755052740232_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=H25D0gLSy7AAX-pMzlT&oh=0865ac03bcc4387f8503bdf5f027394e&oe=5F0B44E5"
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
        category: "Jumpsuits",
        seller: "juliet",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90809236_213692506510398_2046760244130446093_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=W2Cx0pc1LEQAX9AinAA&oh=7e828038e48a54ca13f71017c223d258&oe=5F0B2E8C"
        ]
      },
      {
        productID: 65500,
        instock: 5,
        rating: 5,
        price: 6000,
        colors: ["black"],
        sizes: "M",
        description: "tight fit go",
        materials: ["linen"],
        category: "Jumpsuits",
        seller: "juliet",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90396312_140123414108773_3484098825815952962_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=3bzWPXStjjMAX-Ii1w-&oh=81471bf6a457610c4f0fe04c656cb06a&oe=5F0CA675"
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
        category: "Bottoms",
        seller: "juliet",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90676402_203425110954322_7157628800644820252_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=lF5T74srknAAX8WCnWC&oh=4e9341c1b62b2ba52364d0274c2a0256&oe=5F0C013B"
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
        category: "Bottoms",
        seller: "juliet",
        URI: [
          "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s320x320/89967520_147668693168543_643852003387361141_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=4M0mjIjGljEAX_ZZMgs&oh=671e00825b6f714def801be7c2e08d9e&oe=5F0B48BB"
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
        category: "Bottoms",
        seller: "juliet",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/c1.0.717.717a/s240x240/89846304_563889231000248_298120404055117627_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=XbhwmygjihkAX-7tQpL&oh=a5f02f0efb688cd402b29f2b0907360c&oe=5F0D296F"
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
        category: "Blouses",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/90033658_213835039987218_6215093301308257259_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=cP2oJncJ8kQAX_8ntFL&oh=ca3ed6557975f30d89700b16df95512b&oe=5F0C0D51"
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
        category: "Blouses",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/90676402_203425110954322_7157628800644820252_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=lF5T74srknAAX8WCnWC&oh=4e9341c1b62b2ba52364d0274c2a0256&oe=5F0C013B"
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
        category: "Blouses",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/89853602_300071184290426_4273885749160331035_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=NhMjBvt-32gAX9Vobp9&oh=c0e2ca2eddf20f6fd26e51203cf68549&oe=5F0BD695"
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
        category: "Jumpsuits",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/90087653_155090732623218_4909097977760666215_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=zQpd0mlZ1FoAX_6jbcQ&oh=9f9a84ee617c7976377300d9cab9f3ab&oe=5F0CEA07"
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
        category: "Jumpsuits",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/c10.0.699.699a/s240x240/89749958_248771989618959_7175017422310611091_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=OjJCY0z9-D8AX8q85Cv&oh=d06df4fd87450db921229acd12f8328b&oe=5F0B33F8"
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
        category: "Jumpsuits",
        seller: "omare",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.2.719.719a/s240x240/89848754_647360749411774_4946683316704267871_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=5wlgGTUKwCAAX-OvVu-&oh=b9f8f33bb75f2e8390361c32a5ffd47a&oe=5F0AB212"
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
        category: "Bodysuits",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.82.661.661a/s240x240/90086117_619505202223561_867198532102346738_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=uJ25dg5LeNsAX_r5pSh&oh=e25044ec609f40599866a65545da6f00&oe=5F0E0AC6"
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
        category: "Bodysuits",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/89836162_227400221648868_8862286543398755325_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=uoukylhAGH4AX8bG9WT&oh=72428f15d05ea16e2657a23c0b76c08a&oe=5F0CE1FB"
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
        category: "Bodysuits",
        seller: "shalom",
        URI: [
          "https://scontent-los2-1.cdninstagram.com/v/t51.2885-15/e35/s240x240/89697815_229067988458387_5218522095876946160_n.jpg?_nc_ht=scontent-los2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=60k11N8s47IAX82VQDP&oh=644d67c68de4388a876324d9665706b6&oe=5F0AEC51"
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
        category: "Shirts",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.90.720.720a/s240x240/90180321_602977430255455_8489897774199484142_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=lUGtIC35hmwAX_afDFm&oh=dcb96e10d428593e9a549abef92a7f8f&oe=5F0AA630"
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
        category: "Shirts",
        seller: "shalom",
        URI: [
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/89834117_549633759016354_7522059460441410163_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=1tajYpjJhfsAX8w0w7I&oh=2549e94480c8dc56571b705a95dfaf4a&oe=5F0B1BE3"
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
