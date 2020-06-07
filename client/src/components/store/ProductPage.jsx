import React, { Component } from "react";
// import axios from "axios";
// import Options from "./Options";
import ProductDisplay from "./ProductsDisplay";
import Cart from "./Cart";
import _ from "lodash";
import Paginate from "./../all/Pagination";
import { pages } from "./../../utils/pages";

class ProductPage extends Component {
  state = {
    // products: [
    //   {
    //     productID: 53186,
    //     instock: 5,
    //     rating: 4,
    //     price: 1000,
    //     colors: ["orange", "pink", "green"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "low cut miniskirt with slit",
    //     materials: ["cotton"],
    //     category: "top",
    //     seller: "shalom",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_155090732623218_4909097977760666215_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6TcX_6ME5xwAX-ZL-Nd&oh=b89b1a0c67d6911dc64777b73ca80f37&oe=5ED5D1BD"
    //     ]
    //   },
    //   {
    //     productID: 65483,
    //     instock: 5,
    //     rating: 4,
    //     price: 2000,
    //     colors: ["red", "blue"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "starry jeans",
    //     materials: ["denim"],
    //     category: "jeans",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/91084754_216018266383112_7200314527193148546_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=ciRwqSLzVUMAX9DZXz5&oh=1618145295e3fb7a4ea5de45280da0da&oe=5ED7A05B"
    //     ]
    //   },
    //   {
    //     productID: 69883,
    //     instock: 9,
    //     rating: 7,
    //     price: 3000,
    //     colors: ["red", "blue"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "multi colored romper",
    //     materials: ["polyester"],
    //     category: "jeans",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89733134_141233014066873_2975602050831648831_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=xKPJGP6smYgAX-aVeAl&oh=44d85534a0a3bbf66d09737ae8cf7292&oe=5ED71F66"
    //     ]
    //   },
    //   {
    //     productID: 69483,
    //     instock: 5,
    //     rating: 4,
    //     price: 4000,
    //     colors: ["white"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: " see through beach wear",
    //     materials: ["linen"],
    //     category: "gown",
    //     seller: "juliet",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90021266_586079645316681_3381606526350380255_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yFkwTJapL8YAX_GfU5n&oh=45fdd74b44587024c61fa7d400dbe34f&oe=5ED7731E"
    //     ]
    //   },
    //   {
    //     productID: 6548893,
    //     instock: 5,
    //     rating: 5,
    //     price: 5000,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "dress",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.82.661.661a/s320x320/90086117_619505202223561_867198532102346738_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=fcbs-8tPGCgAX8Q5e2Y&oh=aa212cc581107eea0e8d377603ef6b80&oe=5ED641FE"
    //     ]
    //   },
    //   {
    //     productID: 65500,
    //     instock: 5,
    //     rating: 5,
    //     price: 6000,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "skirt",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90087653_666262364202482_8127632928219732007_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=5m-GR6uPBSwAX_r-XlI&oh=76f1dc3546b23be45594a83fb99f1555&oe=5ED84D0D"
    //     ]
    //   },
    //   {
    //     productID: 65501,
    //     instock: 5,
    //     rating: 5,
    //     price: 7000,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "skirt",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.2.719.719a/s320x320/89848754_647360749411774_4946683316704267871_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=amkvxXp2JyMAX86syzO&oh=462d9b20b176e30fb5e04351a0fad118&oe=5ED5FFAC"
    //     ]
    //   },
    //   {
    //     productID: 65502,
    //     instock: 5,
    //     rating: 5,
    //     price: 8000,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jeans",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89853602_300071184290426_4273885749160331035_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=k2ULCVqX8LYAX-_k8Yu&oh=427a4dd467bfa9a41e3a0d9fe856efd0&oe=5ED76AAF"
    //     ]
    //   },
    //   {
    //     productID: 65503,
    //     instock: 5,
    //     rating: 5,
    //     price: 9000,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jeans",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.2.720.720a/s320x320/90087698_539420096683907_6744294665906325407_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=-E5PPeOT13wAX8tdR8H&oh=f704cdd21774afb75c5a6b6e0b561924&oe=5ED8D65E"
    //     ]
    //   },
    //   {
    //     productID: 65504,
    //     instock: 5,
    //     rating: 5,
    //     price: 1001,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "tanktop",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.90.720.720a/s320x320/90086854_2530007643878420_5491336721729133427_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=CTe2HKDGLRMAX9aA0vl&oh=e83de7696ffef4f9138ba5174b5fbdd3&oe=5ED5F082"
    //     ]
    //   },
    //   {
    //     productID: 65505,
    //     instock: 5,
    //     rating: 5,
    //     price: 1002,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "tanktop",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89852604_655634368521569_2331432557634546236_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=BooF2XULiYEAX9hqtmi&oh=db2ac8984eab0f53517ab5191e70f13d&oe=5ED733BB"
    //     ]
    //   },
    //   {
    //     productID: 65506,
    //     instock: 5,
    //     rating: 5,
    //     price: 1003,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "bumshort",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89853352_104508647772364_3534803772972359521_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=4W67dmaJV3wAX-H-8fT&oh=b17cde36a519d8861bf0cb2824de15ad&oe=5ED8483A"
    //     ]
    //   },
    //   {
    //     productID: 65507,
    //     instock: 5,
    //     rating: 5,
    //     price: 1004,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "bumshirt",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90090259_116816989933140_1302035151542800016_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=kKqJKPaGNZ8AX9_9kkl&oh=df9a535196ff5d27d0a3d9dc0cc4f34a&oe=5ED6DCD4"
    //     ]
    //   },
    //   {
    //     productID: 65508,
    //     instock: 5,
    //     rating: 5,
    //     price: 1005,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jacket",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90025630_739432903256421_8576011492743774757_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=u_1V7vffuv4AX_xyych&oh=a67623237acb098b106757ca4f20a8e3&oe=5ED67C9B"
    //     ]
    //   },
    //   {
    //     productID: 65509,
    //     instock: 5,
    //     rating: 5,
    //     price: 1006,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jacket",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/90416722_3163653506980920_2237475317615290862_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=cVbW9y9zNqMAX8wLn1r&oh=fa2f5c8855f271a75a82153a88670c70&oe=5ED80DDE"
    //     ]
    //   },
    //   {
    //     productID: 65501075,
    //     instock: 5,
    //     rating: 5,
    //     price: 1007,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "sweater",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89859944_3629974960377892_1453523459746156164_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=SRqtyq_1bqEAX94vxUt&oh=b4fe1ccf1acc8be6a3d1191006cd17fc&oe=5ED734FF"
    //     ]
    //   },
    //   {
    //     productID: 6548359,
    //     instock: 5,
    //     rating: 5,
    //     price: 1008,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "sweater",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
    //     ]
    //   },
    //   {
    //     productID: 6548356,
    //     instock: 5,
    //     rating: 5,
    //     price: 1009,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jeggings",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
    //     ]
    //   },
    //   {
    //     productID: 6548355,
    //     instock: 5,
    //     rating: 5,
    //     price: 1010,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jeggings",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
    //     ]
    //   },
    //   {
    //     productID: 6548354,
    //     instock: 5,
    //     rating: 5,
    //     price: 1011,
    //     colors: ["black"],
    //     sizes: ["M", "L", "S"],
    //     productTitle: "tight fit gown",
    //     materials: ["linen"],
    //     category: "jeggings",
    //     seller: "omare",
    //     URI: [
    //       "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/89836576_1386632248190546_3744129423301634869_n.jpg?_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=DKj_wnfadw0AX8dACv0&oh=e8d588049a09b7bd0069b0870d35c093&oe=5ED7063D"
    //     ]
    //   }
    // ],
    cart: [],
    pageSize: 6,
    currentPage: 2
  };

  //handler for increasing quantity of given product
  incrementCart = id => {
    const found = _.find(this.state.cart, { productID: id });
    found.quantity++;
    const cart = [...this.state.cart];
    this.setState({ cart });
  };
  //handler for incresing quantity of given product
  decrementCart = id => {
    const found = _.find(this.state.cart, { productID: id });
    if (found.quantity === 1) {
      return;
    }
    found.quantity--;
    const cart = [...this.state.cart];
    this.setState({ cart });
  };

  //handler for incresing quantity of given product
  removeFromCart = id => {
    const cart = this.state.cart.filter(item => item.productID !== id);
    this.setState({ cart });
  };
  //add item to cart
  addToCart = (productID, description, size, price, URI) => {
    const cart = [...this.state.cart];
    const addProduct = {
      quantity: 1,
      productID,
      description,
      size,
      price,
      URI
    };
    const found = _.find(cart, { productID });
    if (found) {
      return;
    }
    cart.push(addProduct);
    this.setState({ cart });
  };

  // async populateState() {
  //   try {
  //     const products = await axios.get("/api/product/");

  //     this.setState({ products: products.data });
  //   } catch (err) {
  //     // this.populateState();
  //   }
  // }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  componentDidMount() {
    // this.populateState();
  }

  render() {
    const { pageSize, currentPage } = this.state;
    const { products } = this.props;
    const sendDown = pages(products, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="productPage mt-5 ml-3">
          {/* <Options /> */}
          <Cart
            className="mr-3"
            cart={this.state.cart}
            inc={this.incrementCart}
            dec={this.decrementCart}
            rem={this.removeFromCart}
          />

          <ProductDisplay
            className="container ml-4"
            products={sendDown}
            addToCart={this.addToCart}
            onPageChange={this.handlePageChange}
            itemsCount={products.length}
            pageSize={pageSize}
            currentPage={currentPage}
          />
          {/* )} */}
        </div>
        <Paginate
          onPageChange={this.handlePageChange}
          itemsCount={products.length}
          pageSize={pageSize}
          currentPage={currentPage}
        />
      </React.Fragment>
    );
  }
}

export default ProductPage;
