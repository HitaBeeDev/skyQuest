import React from "react";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";

export default function PassengerNumControl({
  label,
  labelSpan,
  ageLabel,
  type,
  onCountChange,
}) {
  const [count, setCount] = React.useState(0);

  const handleIncrement = () => {
    const newCount = count + 1;
    setCount(newCount);
    onCountChange(newCount);
  };

  const handleDecrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      onCountChange(newCount);
    }
  };

  return (
    <div className="justify-between w-full flex flex-row">
      <div className="flex mt-1 flex-col gap-1">
        <p className="text-xs text-color1 font-medium">
          {label}: {count}
        </p>
        <p className="text-[10px] text-color2">{ageLabel}</p>
      </div>

      <div className="flex flex-row justify-between w-4/12 items-center">
        <img
          onClick={handleDecrement}
          className="hover:bg-color3 transition-all cursor-pointer w-4 rounded-sm border-color2 border-[1px] p-[3px]"
          src={minus}
          alt="minus icon"
        />
        <p className="text-xs text-color1 font-medium">{type}</p>
        <img
          onClick={handleIncrement}
          className="hover:bg-color3 transition-all cursor-pointer w-4 rounded-sm border-color2 border-[1px] p-[3px]"
          src={plus}
          alt="plus icon"
        />
      </div>
    </div>
  );
}
