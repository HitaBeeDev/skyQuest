import turkish3 from "../assets/turkish3.png";
import searchArrow from "../assets/searchArrow.png";
import flightDatas from "./flightDatas";

export default function FlightDetailsCard({
  departure,
  arrival,
  isRoundTrip,
  cabinClass,
  adultsCount,
  childrenCount,
}) {
  const airportCode = departure.toLowerCase().split("-")[1].trim();

  const findSelectedFlight = flightDatas.find(
    (obj) => obj.departureAirport.toLowerCase() === airportCode
  );

  if (!findSelectedFlight) {
    return <p>No flight data found for the selected criteria.</p>;
  }

  const childrenMultiplier = 0.5;
  const adultsPrice = findSelectedFlight.price * adultsCount;
  const childrenPrice =
    findSelectedFlight.price * childrenCount * childrenMultiplier;

  const basePrice =
    cabinClass === "Business"
      ? adultsPrice * 2.5 + childrenPrice * 2.5
      : adultsPrice + childrenPrice;

  return (
    <div className="mb-5 flex flex-row bg-color4 rounded-xl lg:p-3 p-2">
      <div className="w-10/12 flex flex-col gap-10">
        <div className="flex flex-row justify-center lg:gap-8 gap-3 items-center">
          <img src={turkish3} className="lg:w-10 lg:h-3 w-8 h-3" />
          <div>
            <p className="lg:text-xs text-[9px] text-color1 font-semibold">
              {departure}
            </p>
            <p className="lg:text-xs text-[9px] text-color1 font-semibold text-right">
              {findSelectedFlight.departureTime}
            </p>
          </div>
          <div className="flex flex-col justify-center gap-1 w-2/12 text-center">
            <p className="lg:text-xs text-[9px] text-color1">
              {findSelectedFlight.flightDuration}
            </p>
            <div className="border-t-2 border-color5"></div>
            <p className="lg:text-xs text-[9px] text-color1">
              {findSelectedFlight.stops}
            </p>
          </div>
          <div>
            <p className="lg:text-xs text-[9px] text-color1 font-semibold">
              {arrival}
            </p>
            <p className="lg:text-xs text-[9px] text-color1 font-semibold text-right">
              {findSelectedFlight.arrivalTime}
            </p>
          </div>
        </div>
        {/* If round trip, display return information */}
        {isRoundTrip && (
          <div className="flex flex-row justify-center lg:gap-8 gap-3 items-center">
            <img src={turkish3} className="w-10 h-3" />
            <div>
              <p className="lg:text-xs text-[9px] text-color1 font-semibold">
                {arrival}
              </p>
              <p className="lg:text-xs text-[9px] text-color1 font-semibold text-right">
                {findSelectedFlight.returnDepartureTime}
              </p>
            </div>
            <div className="flex flex-col justify-center gap-1 w-2/12 text-center">
              <p className="lg:text-xs text-[9px] text-color1">
                {findSelectedFlight.returnFlightDuration}
              </p>
              <div className="border-t-2 border-color5"></div>
              <p className="lg:text-xs text-[9px] text-color1">
                {findSelectedFlight.stops}
              </p>
            </div>
            <div>
              <p className="lg:text-xs text-[9px] text-color1 font-semibold">
                {departure}
              </p>
              <p className="lg:text-xs text-[9px] text-color1 font-semibold text-right">
                {findSelectedFlight.returnArrivalTime}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="w-3/12 flex flex-col justify-center items-center">
        <p className="lg:text-xs text-[9px] text-color2">
          adults: {adultsCount}
        </p>
        <p className="lg:text-xs text-[9px] text-color2 mt-1">
          children: {childrenCount}
        </p>
        <p className="lg:text-xs text-[9px] mt-2 text-color1 font-semibold">
          ${basePrice.toFixed(2)}
        </p>
        <div className="flex items-center cursor-pointer flex-row bg-color1 lg:gap-2 gap-1 lg:p-2 p-[5px] rounded-lg lg:mt-8 mt-2 hover:bg-color2 transition-all duration-500">
          <button className="lg:text-xs text-[8px] text-color4">Search</button>
          <img
            src={searchArrow}
            alt="search arrow"
            className="lg:w-4 lg:h-4 w-3 h-3"
          />
        </div>
      </div>
    </div>
  );
}
