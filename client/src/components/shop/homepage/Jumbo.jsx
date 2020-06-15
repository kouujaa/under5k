import React from "react";
import { motion } from "framer-motion";
import { UncontrolledCarousel } from "reactstrap";
import firstPick from "../../shop/firstpic.jpg";
import secondPick from "../../shop/2.jpg";

const items = [
  {
    src: firstPick,
    altText: "Slide 1",
    caption: "Customer favorites selections",
    header: "TOP SELLER!!!",
    key: "1"
  },
  {
    src: secondPick,
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Dame of the week",
    key: "2"
  },
  {
    src: firstPick,
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
        className="display-4 lead jumbotxt"
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
