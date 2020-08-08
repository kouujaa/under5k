import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import firstpic from "../firstpic.jpg";
import secondpic from "../2.jpg";
import thirdpic from "../4.jpg";
import forthpic from "../5.jpg";

const Jumbo = () => {
  return (
    <React.Fragment>
      <motion.div
        className="display-4 lead jumbotxt"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel
          className="jumboCar"
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
        >
          <div>
            <img alt="clothing item" src={firstpic} className="jumboPic" />
            {/* <Link to="/shop" className="legend">
              TOP SELLER!!!
            </Link> */}
          </div>
          {/* <div>
            <img alt="clothing item" src={secondpic} className="jumboPic" />
            <p className="legend">Dame of the week</p>
          </div>
          <div>
            <img alt="clothing item" src={thirdpic} className="jumboPic" />
            <Link to="/shop/omathrift" className="legend">
              OmathrtiftStore
            </Link>
          </div>
          <div>
            <img alt="clothing item" src={forthpic} className="jumboPic" />
            <Link to="/shop/juliet" className="legend">
              ThriftWithPenny
            </Link>
          </div> */}
        </Carousel>
      </motion.div>
    </React.Fragment>
  );
};

export default Jumbo;

// import React from "react";
// import { motion } from "framer-motion";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import { Link } from "react-router-dom";
// import firstpic from "../firstpic.jpg";
// import secondpic from "../2.jpg";
// import thirdpic from "../4.jpg";
// import forthpic from "../5.jpg";

// const Jumbo = () => {
//   return (
//     <React.Fragment>
//       <motion.div
//         className="display-4 lead jumbotxt"
//         initial={{ x: 300 }}
//         animate={{ x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         <Carousel
//           className="jumboCar"
//           showStatus={false}
//           infiniteLoop
//           autoPlay
//           showArrows={false}
//           showThumbs={false}
//           showIndicators={true}
//         >
//           <div>
//             <img alt="clothing item" src={firstpic} className="jumboPic" />
//             <Link to="/shop" className="legend">
//               TOP SELLER!!!
//             </Link>
//           </div>
//           <div>
//             <img alt="clothing item" src={secondpic} className="jumboPic" />
//             <p className="legend">Dame of the week</p>
//           </div>
//           <div>
//             <img alt="clothing item" src={thirdpic} className="jumboPic" />
//             <Link to="/shop/omathrift" className="legend">
//               OmathrtiftStore
//             </Link>
//           </div>
//           <div>
//             <img alt="clothing item" src={forthpic} className="jumboPic" />
//             <Link to="/shop/juliet" className="legend">
//               ThriftWithPenny
//             </Link>
//           </div>
//         </Carousel>
//       </motion.div>
//     </React.Fragment>
//   );
// };

// export default Jumbo;
