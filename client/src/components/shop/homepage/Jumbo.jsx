import React, { Component } from "react";
import { motion } from "framer-motion";
import { UncontrolledCarousel } from "reactstrap";
import firstPick from "../../shop/firstpic.jpg";

const items = [
  {
    src: firstPick,
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1"
  },
  {
    src: "../../shop/firstpic.jpg",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2"
  },
  {
    src: "../../shop/firstpic.jpg",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3"
  }
];
const Jumbo = () => {
  return (
    <React.Fragment>
      <motion.div
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <UncontrolledCarousel items={items} />
      </motion.div>
    </React.Fragment>
  );
};

export default Jumbo;
// class Jumbo extends Component {
//   state = {
//     items:
//   };

//   render() {
//     return (
//       <React.Fragment>
//         <motion.div
//           initial={{ x: 300 }}
//           animate={{ x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <UncontrolledCarousel items={this.state.items} />
//         </motion.div>
//       </React.Fragment>
//     );
//   }
// }

// export default Jumbo;

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
