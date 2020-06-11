import React, { Component } from "react";
import { motion } from "framer-motion";
import { UncontrolledCarousel } from "reactstrap";
import firstPick from "../../shop/firstpic.jpg";

class Jumbo extends Component {
  state = {
    items: [
      {
        src:
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90997707_619481025564891_1242875913331758935_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BREbglMD_zkAX87EwOu&oh=633cb5417e0bdcc3e76c4069205af70f&oe=5F0AF75C",
        altText: "Slide 1",
        caption: "Slide 1",
        header: "Slide 1 Header",
        key: "1"
      },
      {
        src:
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90997707_619481025564891_1242875913331758935_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BREbglMD_zkAX87EwOu&oh=633cb5417e0bdcc3e76c4069205af70f&oe=5F0AF75C",
        altText: "Slide 2",
        caption: "Slide 2",
        header: "Slide 2 Header",
        key: "2"
      },
      {
        src:
          "https://instagram.fbni1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90997707_619481025564891_1242875913331758935_n.jpg?_nc_ht=instagram.fbni1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=BREbglMD_zkAX87EwOu&oh=633cb5417e0bdcc3e76c4069205af70f&oe=5F0AF75C",
        altText: "Slide 3",
        caption: "Slide 3",
        header: "Slide 3 Header",
        key: "3"
      }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <motion.div
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          <UncontrolledCarousel items={this.state.items} />
        </motion.div>
      </React.Fragment>
    );
  }
}

export default Jumbo;

{
  /* <div className="jumbotron jumb">
<div className="mt-5">
  <h1 className="display-4">TOP SELLER!!!</h1>
  <p className="lead jumbotxt">Discount offers</p>
  <p>Customer favorites selections</p>
  <p className="lead">
    <a
      className="btn btn-primary btn-lg jumbotxt m-4"
      href="#home"
      role="button"
    >
      VIEW SHOP
    </a>
  </p>
</div>
</div> */
}
