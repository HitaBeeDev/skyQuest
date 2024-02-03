import { useState } from "react";
import DepartureArrivalInput from "./DepartureArrivalInput";
import DateSelector from "./DateSelector";
import CabinPassengerCard from "./CabinPassengerCard";

export default function SearchCardSection({ onSearch, setIsRoundTrip }) {
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [isRoundTrip, setIsRoundTripLocal] = useState(true);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);
  const [error, setError] = useState("");

  const handleSearchClick = () => {
    if (!departure.trim() || !arrival.trim()) {
      setError("Please fill all the inputs before searching.");
      return;
    }
    setError("");
    onSearch(
      departure,
      arrival,
      isRoundTrip,
      cabinClass,
      adultsCount,
      childrenCount
    );
  };

  return (
    <div className="p-10 flex flex-col gap-8 lg:pl-20 lg:pr-20 pt-10 pb-10 rounded-2xl bg-[#457B9D] bg-opacity-30 backdrop-blur-2xl backdrop-filter shadow-xl">
      <div className="flex flex-col gap-2">
        <h2 className="text-sm text-color1">Discover Flights Worldwide!</h2>
        <p className="text-xs text-color4">
          Just enter your flight details and discover options worldwide in a
          snap!
        </p>
      </div>

      <DepartureArrivalInput
        setDeparture={setDeparture}
        setArrival={setArrival}
      />

      <DateSelector setIsRoundTrip={setIsRoundTripLocal} />

      <CabinPassengerCard
        setCabinClass={setCabinClass}
        setAdultsCount={setAdultsCount}
        setChildrenCount={setChildrenCount}
      />
      <div className="w-full flex flex-col">
        {error && (
          <p className="mb-2 text-center text-xs font-semibold text-red-500">
            {error}
          </p>
        )}
        <button
          className="bg-color5 rounded-md h-8 text-sm font-medium text-color4 hover:bg-color4 hover:text-color5 transition-all duration-700"
          onClick={handleSearchClick}
        >
          Search
        </button>

        <p className="text-xs text-color1 font-semibold text-center mt-3">
          Ready for your trip? Click{" "}
          <a
            className="underline underline-offset-2 hover:text-color5"
            href="https://travel-check-list2.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          for a quick travel checklist and start packing like a pro! 😊
        </p>
      </div>
    </div>
  );
}
