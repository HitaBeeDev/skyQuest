import { useState } from "react";
import FlightDetailsCardSection from "./FlightDetailsCardSection";
import SearchCardSection from "./SearchCardSection";
import WelcomeCardSection from "./WelcomeCardSection";
import loading from "../assets/loading.gif";

const LoadingIcon = () => (
  <div className="w-16 h-16 rounded-full p-4 flex justify-center bg-white">
    <img src={loading} alt="Loading" />
  </div>
);

export default function Container() {
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(true);
  const [cabinClass, setCabinClass] = useState("Economy");
  const [adultsCount, setAdultsCount] = useState(1);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleSearch = (
    departure,
    arrival,
    roundTrip,
    cabin,
    adultsCount,
    childrenCount
  ) => {
    setLoading(true);
    setTimeout(() => {
      setSelectedDeparture(departure);
      setSelectedArrival(arrival);
      setIsRoundTrip(roundTrip);
      setCabinClass(cabin);
      setAdultsCount(adultsCount);
      setChildrenCount(childrenCount);
      setShowResult(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="lg:grid lg:p-32 p-6 lg:grid-cols-2 lg:gap-32 justify-center items-center content-center h-screen">
      <SearchCardSection
        onSearch={handleSearch}
        setIsRoundTrip={setIsRoundTrip}
        setCabinClass={setCabinClass}
      />
      {loading ? (
        <LoadingIcon />
      ) : showResult ? (
        <FlightDetailsCardSection
          departure={selectedDeparture}
          arrival={selectedArrival}
          isRoundTrip={isRoundTrip}
          cabinClass={cabinClass}
          adultsCount={adultsCount}
          childrenCount={childrenCount}
        />
      ) : (
        <WelcomeCardSection />
      )}
    </div>
  );
}
