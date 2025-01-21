import "./hero.scss";
import { motion } from "framer-motion";

const text = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },

  btn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const slider = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat: Infinity,
      duration: 20,
    },
  },

  btn: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={text}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={text}>PIYUSH OJEKAR</motion.h2>
          <motion.h1 variants={text}>React Js developer</motion.h1>
          <motion.div className="btns" variants={text}>
            <motion.button variants={text}>See the latest work</motion.button>
            <motion.button variants={text}>Contact me</motion.button>
          </motion.div>
          <motion.img variants={text} animate="btn" src="/scroll.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="bgContainer"
        variants={slider}
        initial="initial"
        animate="animate"
      >
        Developer UI Designer MERN Stack
      </motion.div>
      <div className="image">
        <img src="/her.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
