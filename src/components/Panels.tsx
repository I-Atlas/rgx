import { FC } from "react";
import { motion } from "framer-motion";

interface PanelsProps {}

export const Panels: FC<PanelsProps> = () => {
  return (
    <>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        exit={{ height: [0, window.innerHeight, 0], top: [null, 0, 0] }}
        transition={{
          ease: [0.6, -0.05, 0.01, 0.9],
          duration: 2,
          times: [0, 0.5, 1],
        }}
        className="left-panel"
      ></motion.div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: [0, window.innerHeight, 0],
          bottom: [0, 0, window.innerHeight],
        }}
        exit={{ height: [0, window.innerHeight, 0], bottom: [null, 0, 0] }}
        transition={{
          ease: [0.6, -0.05, 0.01, 0.9],
          duration: 2,
          times: [0, 0.5, 1],
        }}
        className="right-panel"
      ></motion.div>
    </>
  );
};
