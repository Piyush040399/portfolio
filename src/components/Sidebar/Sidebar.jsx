import { useState } from "react";
import Btn from "./Btn";
import Links from "./Links";
import { motion } from "framer-motion";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const variants = {
    open: {
        clipPath:"circle(1200px at 50px 50px)",
        transition:{
            type:"spring",
            stiffness:20
        }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bground" variants={variants}>
        <Links />
      </motion.div>
      <Btn setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
