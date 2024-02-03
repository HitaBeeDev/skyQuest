import { useState, useEffect, useRef } from "react";
import SearchInput from "./SearchInput";
import flightDatas from "./flightDatas";

export default function DepartureArrivalInput({ setDeparture, setArrival }) {
  const [departureInput, setDepartureInput] = useState("");
  const [arrivalInput, setArrivalInput] = useState("");
  const [departureSearchResults, setDepartureSearchResults] = useState([]);
  const [arrivalSearchResults, setArrivalSearchResults] = useState([]);
  const [departureError, setDepartureError] = useState("");
  const [arrivalError, setArrivalError] = useState("");
  const departureInputRef = useRef(null);
  const arrivalInputRef = useRef(null);

  useEffect(() => {
    setDeparture(departureInput);
    setArrival(arrivalInput);
  }, [departureInput, arrivalInput]);

  const handleSearchInput = (event, setInput, setSearchResults) => {
    const inputValue = event.target.value.toLowerCase();
    setInput(inputValue);

    const filteredResults = flightDatas.filter((flight) => {
      const combinedInfo = `${flight.departureCity.toLowerCase()} ${flight.departureAirport.toLowerCase()} ${flight.arrivalCity.toLowerCase()} ${flight.arrivalAirport.toLowerCase()}`;
      return combinedInfo.includes(inputValue);
    });

    setSearchResults(filteredResults);
  };

  const handleSelectCity = (searchResult, setInput, isDeparture) => {
    const displayValue = isDeparture
      ? `${searchResult.departureCity} - ${searchResult.departureAirport}`
      : `${searchResult.arrivalCity} - ${searchResult.arrivalAirport}`;
    setInput(displayValue);

    // Immediately clear search results to close the suggestion list
    setDepartureSearchResults([]);
    setArrivalSearchResults([]);

    // Check for flight availability and set error messages accordingly
    checkFlightAvailability(displayValue, isDeparture);
  };

  const checkFlightAvailability = (displayValue, isDeparture) => {
    const isValid = flightDatas.some((flight) => {
      const searchValue = displayValue.split(" - ")[0].toLowerCase();
      return isDeparture
        ? flight.departureCity.toLowerCase().includes(searchValue) ||
            flight.departureAirport.toLowerCase().includes(searchValue)
        : flight.arrivalCity.toLowerCase().includes(searchValue) ||
            flight.arrivalAirport.toLowerCase().includes(searchValue);
    });

    if (!isValid) {
      const errorMessage = `No flights available for ${displayValue}. Please select a different location.`;
      if (isDeparture) {
        setDepartureError(errorMessage);
      } else {
        setArrivalError(errorMessage);
      }
    } else {
      // Clear any existing error messages if the selection is valid
      if (isDeparture) setDepartureError("");
      else setArrivalError("");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        departureInputRef.current &&
        !departureInputRef.current.contains(event.target)
      ) {
        setDepartureSearchResults([]);
      }
      if (
        arrivalInputRef.current &&
        !arrivalInputRef.current.contains(event.target)
      ) {
        setArrivalSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="text-sm text-color1 font-semibold flex flex-col gap-3 relative">
      {departureError && <p className="text-red-500">{departureError}</p>}
      <SearchInput
        label="Depart From"
        inputRef={departureInputRef}
        inputValue={departureInput}
        setSearchResults={setDepartureSearchResults}
        handleInputChange={(event) =>
          handleSearchInput(event, setDepartureInput, setDepartureSearchResults)
        }
        handleSelectCity={(searchResult) =>
          handleSelectCity(searchResult, setDepartureInput, true)
        }
        searchResults={departureSearchResults}
      />

      {arrivalError && <p className="text-red-500">{arrivalError}</p>}
      <SearchInput
        label="Arrive At"
        inputRef={arrivalInputRef}
        inputValue={arrivalInput}
        setSearchResults={setArrivalSearchResults}
        handleInputChange={(event) =>
          handleSearchInput(event, setArrivalInput, setArrivalSearchResults)
        }
        handleSelectCity={(searchResult) =>
          handleSelectCity(searchResult, setArrivalInput, false)
        }
        searchResults={arrivalSearchResults}
      />
    </div>
  );
}
