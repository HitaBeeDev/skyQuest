export default function SearchInput({
  label,
  inputRef,
  inputValue,
  handleInputChange,
  searchResults,
  handleSelectCity,
  isDeparture,
}) {
  return (
    <div className="flex flex-row justify-between">
      <label htmlFor={label.toLowerCase().replace(/\s+/g, "")}>{label}</label>
      <div ref={inputRef} className="relative w-7/12">
        <input
          className="rounded-md p-1 w-full text-xs text-color2 pl-2"
          id={label.toLowerCase().replace(/\s+/g, "")}
          type="text"
          placeholder={`Enter ${label}`}
          value={inputValue}
          onChange={handleInputChange}
        />
        {searchResults.length > 0 && (
          <div className="absolute top-full mt-2 left-0 w-full bg-color4 rounded-lg p-1 z-10">
            <ul>
              {searchResults.map((flight) => (
                <div key={flight.id} className="flight-info">
                  <li
                    className="text-[10px] text-color2 cursor-pointer"
                    onClick={() => handleSelectCity(flight, isDeparture)}
                  >
                    {flight.departureCity} - {flight.departureAirport}
                  </li>
                  <li
                    className="text-[10px] text-color2 cursor-pointer"
                    onClick={() => handleSelectCity(flight, isDeparture)}
                  >
                    {flight.arrivalCity} - {flight.arrivalAirport}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
