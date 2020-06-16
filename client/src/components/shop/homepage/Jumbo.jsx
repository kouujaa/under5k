import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

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
            <img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2Ffirstpic.jpg?alt=media&token=09314e43-62c7-4395-a1ce-85d784d19211" />
            <Link to="/shop" className="legend">
              TOP SELLER!!!
            </Link>
          </div>
          <div>
            <img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2F2.jpg?alt=media&token=75fb0c37-f9aa-4ac4-89cc-9f1a852836d0" />
            <p className="legend">Dame of the week</p>
          </div>
        </Carousel>
      </motion.div>
    </React.Fragment>
  );
};

export default Jumbo;

//  <UncontrolledCarousel items={items} />
{
  /* <div>
<img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2F2.jpg?alt=media&token=75fb0c37-f9aa-4ac4-89cc-9f1a852836d0"></img>
</div>
<div>
<img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2Ffirstpic.jpg?alt=media&token=09314e43-62c7-4395-a1ce-85d784d19211"></img>
</div>
<div>
<img src="https://firebasestorage.googleapis.com/v0/b/thriftgallery-ab5c9.appspot.com/o/images%2Ffirstpic.jpg?alt=media&token=09314e43-62c7-4395-a1ce-85d784d19211"></img>
</div> */
}
