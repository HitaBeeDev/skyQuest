import { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import flightDatas from "./flightDatas";

export default function DepartureArrivalInput({ setDeparture, setArrival }) {
  const [inputs, setInputs] = useState({ departure: "", arrival: "" });
  const [searchResults, setSearchResults] = useState({
    departure: [],
    arrival: [],
  });
  const [errors, setErrors] = useState({ departure: "", arrival: "" });
  const refs = { departure: useRef(null), arrival: useRef(null) };

  useEffect(() => {
    setDeparture(inputs.departure);
    setArrival(inputs.arrival);
  }, [inputs]);

  const handleSearchInput = (event, type) => {
    const value = event.target.value.toLowerCase();
    setInputs((inputs) => ({ ...inputs, [type]: value }));

    const filteredResults = flightDatas.filter((flight) => {
      const info =
        `${flight.departureCity} ${flight.departureAirport} ${flight.arrivalCity} ${flight.arrivalAirport}`.toLowerCase();
      return info.includes(value);
    });

    setSearchResults((results) => ({ ...results, [type]: filteredResults }));
  };

  const handleSelectCity = (searchResult, type) => {
    const value =
      type === "departure"
        ? `${searchResult.departureCity} - ${searchResult.departureAirport}`
        : `${searchResult.arrivalCity} - ${searchResult.arrivalAirport}`;

    setInputs((inputs) => ({ ...inputs, [type]: value }));
    setSearchResults({ departure: [], arrival: [] });
    checkFlightAvailability(value, type);
  };

  const checkFlightAvailability = (value, type) => {
    const isValid = flightDatas.some((flight) => {
      const searchValue = value.split(" - ")[0].toLowerCase();
      return type === "departure"
        ? flight.departureCity.toLowerCase().includes(searchValue) ||
            flight.departureAirport.toLowerCase().includes(searchValue)
        : flight.arrivalCity.toLowerCase().includes(searchValue) ||
            flight.arrivalAirport.toLowerCase().includes(searchValue);
    });

    if (!isValid) {
      setErrors((errors) => ({
        ...errors,
        [type]: `No flights available for ${value}. Please select a different location.`,
      }));
    } else {
      setErrors((errors) => ({ ...errors, [type]: "" }));
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refs.departure.current.contains(event.target)) {
        setSearchResults((results) => ({ ...results, departure: [] }));
      }
      if (!refs.arrival.current.contains(event.target)) {
        setSearchResults((results) => ({ ...results, arrival: [] }));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="text-sm text-color1 font-semibold flex flex-col gap-3 relative">
      {errors.departure && <p className="text-red-500">{errors.departure}</p>}
      <SearchInput
        label="Depart From"
        inputRef={refs.departure}
        inputValue={inputs.departure}
        handleInputChange={(event) => handleSearchInput(event, "departure")}
        handleSelectCity={(searchResult) =>
          handleSelectCity(searchResult, "departure")
        }
        searchResults={searchResults.departure}
      />
      {errors.arrival && <p className="text-red-500">{errors.arrival}</p>}
      <SearchInput
        label="Arrive At"
        inputRef={refs.arrival}
        inputValue={inputs.arrival}
        handleInputChange={(event) => handleSearchInput(event, "arrival")}
        handleSelectCity={(searchResult) =>
          handleSelectCity(searchResult, "arrival")
        }
        searchResults={searchResults.arrival}
      />
    </div>
  );
}
