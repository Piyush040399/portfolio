import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const Services = () => {
  const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const isView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      ref={ref}
      variants={variants}
      initial="initial"
      animate={isView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping ypur brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="container" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="list" variants={variants}>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="boxContainer"
        >
          <h2>Branding</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="boxContainer"
        >
          <h2>Branding</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="boxContainer"
        >
          <h2>Branding</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ backgroundColor: "lightgray", color: "black" }}
          className="boxContainer"
        >
          <h2>Branding</h2>
          <p>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
