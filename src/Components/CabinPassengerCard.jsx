import { useState } from "react";
import PassengerNumControl from "./PassengerNumControl";

export default function CabinPassengerCard({
  setCabinClass,
  setAdultsCount,
  setChildrenCount,
}) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <p className="text-[12px] text-color1 font-semibold">
          Travelers and Cabin Class
        </p>
        <select
          className="rounded-md p-1 w-4/12 text-xs text-color2 cursor-pointer"
          onChange={(e) => {
            setCabinClass(e.target.value);
          }}
        >
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
        </select>
      </div>

      <PassengerNumControl
        label="Adults"
        ageLabel="Age 12+"
        type="Adult"
        onCountChange={setAdultsCount}
      />

      <PassengerNumControl
        label="Children"
        ageLabel="Age 2-11"
        type="Child"
        onCountChange={setChildrenCount}
      />
    </div>
  );
}
