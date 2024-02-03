import { motion } from "framer-motion";
import { useState } from "react";
import slidesData from "./slidesData";
import FlightDetailsCard from "./FlightDetailsCard";

const itemHeight = 160;
const totalHeight = slidesData.length * (itemHeight * 1.3);
const dragElastic = 0.5;
const dragConstraints = {
  top: -totalHeight + window.innerHeight,
  bottom: 0,
};
const transition = { type: "tween", duration: 0.5, ease: "easeInOut" };

export default function FlightDetailsCardSection({
  departure,
  arrival,
  isRoundTrip,
  cabinClass,
  adultsCount,
  childrenCount,
}) {
  const [dragY, setDragY] = useState(0);

  const handleDragEnd = (_, { offset: { y } }) => {
    let newDragY = dragY + y;
    const maxDragY = -totalHeight + window.innerHeight;
    newDragY = newDragY % totalHeight;
    setDragY(Math.min(Math.max(newDragY, maxDragY), 0));
  };

  return (
    <div
      className="overflow-x-hidden overflow-y-hidden p-3 mt-12 lg:mt-0"
      style={{ height: "70vh" }}
    >
      <div className="hidden lg:block">
        <motion.div
          style={{ y: dragY }}
          drag="y"
          dragElastic={dragElastic}
          dragConstraints={dragConstraints}
          transition={transition}
          onDragEnd={handleDragEnd}
          className="flex flex-col flex-nowrap"
        >
          <motion.div
            className="overflow-hidden"
            style={{
              minHeight: `${itemHeight}px`,
            }}
            whileTap={{ scale: 0.9 }}
            whileHover={{ transition: "all", duration: 500 }}
          >
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
            <FlightDetailsCard
              departure={departure}
              arrival={arrival}
              isRoundTrip={isRoundTrip}
              cabinClass={cabinClass}
              adultsCount={adultsCount}
              childrenCount={childrenCount}
            />
          </motion.div>
        </motion.div>
      </div>
      <div className="lg:hidden">
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
        <FlightDetailsCard
          departure={departure}
          arrival={arrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
      </div>
    </div>
  );
}
