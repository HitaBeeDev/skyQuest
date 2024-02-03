import { motion } from "framer-motion";
import { useState } from "react";
import slidesData from "./slidesData";
import arrow from "../assets/arrow.png";

const itemWidth = 220;
const totalWidth = slidesData.length * (itemWidth * 1.5);
const dragElastic = 0.5;
const dragConstraints = {
  left: -totalWidth + window.innerWidth,
  right: 0,
};
const transition = { type: "tween", duration: 0.5, ease: "easeInOut" };

export default function WelcomeCardSlidesMotion() {
  const [dragX, setDragX] = useState(0);

  const handleDragEnd = (_, { offset: { x } }) => {
    let newDragX = dragX + x;
    const maxDragX = -totalWidth + window.innerWidth;
    newDragX = newDragX % totalWidth;
    setDragX(Math.min(Math.max(newDragX, maxDragX), 0));
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-hidden p-10"
      style={{ width: "50vw" }}
    >
      <motion.div
        style={{ x: dragX }}
        drag="x"
        dragElastic={dragElastic}
        dragConstraints={dragConstraints}
        transition={transition}
        onDragEnd={handleDragEnd}
        className="flex flex-nowrap"
      >
        {slidesData.map((slide, index) => (
          <motion.div
            key={index}
            className="h-72 w-64 bg-cover bg-center mr-4 rounded-2xl overflow-hidden flex flex-col justify-end"
            style={{
              minWidth: `${itemWidth}px`,
              backgroundImage: `url(${slide.src})`,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05, transition: "all", duration: 500 }}
          >
            <div className="gap-2 flex flex-col items-center">
              <div className="bg-color4 mb-3 transition-all duration-700 cursor-pointer hover:bg-color3 h-7 w-7/12 rounded-lg flex flex-row justify-center items-center gap-2">
                <button className="text-xs text-color1 font-medium">
                  Check
                </button>
                <img
                  src={arrow}
                  alt="arrow icon"
                  className="w-[10px] h-[10px] mt-1"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
