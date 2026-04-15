"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Topbar from "./Topbar";
import Nav from "./Nav";

const Header = () => {
  const { scrollY } = useScroll();
  const topbarHeight = useTransform(scrollY, [0, 50], ["auto", "0px"]);
  const opacity = useTransform(scrollY, [0, 50], [1, 0]);

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        style={{ height: topbarHeight, opacity: opacity }}
        className="overflow-hidden bg-royal-gold"
      >
        <Topbar />
      </motion.div>

      <Nav />
    </div>
  );
};

export default Header;
