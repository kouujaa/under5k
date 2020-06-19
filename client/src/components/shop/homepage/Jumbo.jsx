import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import firstpic from "../firstpic.jpg";
import secondpic from "../2.jpg";

const Jumbo = () => {
  return (
    <React.Fragment>
      <motion.div
        className="display-4 lead jumbotxt"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Carousel showStatus={false} infiniteLoop autoPlay showThumbs={false}>
          <div>
            <img alt="clothing item" src={firstpic} />
            <Link to="/shop" className="legend">
              TOP SELLER!!!
            </Link>
          </div>
          <div>
            <img alt="clothing item" src={secondpic} />
            <p className="legend">Dame of the week</p>
          </div>
        </Carousel>
      </motion.div>
    </React.Fragment>
  );
};

export default Jumbo;
