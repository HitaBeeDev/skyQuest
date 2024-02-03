import Switch from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { useState } from "react";

const labelProps = { "aria-label": "Color switch demo" };

const BlueSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "#1D3557",
    "&:hover": {
      backgroundColor: alpha("#1D3557", theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#1D3557",
  },
}));

export default function DateSelector({ isRoundTrip, setIsRoundTrip }) {
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [roundTrip, setRoundTrip] = useState(true);
  const today = new Date().toISOString().split("T")[0];

  const handleDateChange = (event) => {
    const { id, value } = event.target;
    if (id === "departureDate") {
      setDepartureDate(value);
    } else if (id === "returnDate") {
      setReturnDate(value);
    }
  };

  const handleRoundTripChange = (event) => {
    const isRoundTrip = event.target.checked;
    setRoundTrip(isRoundTrip);
    setIsRoundTrip(isRoundTrip);
  };

  return (
    <div className="text-sm text-color1 font-semibold flex flex-col gap-3">
      <div className="flex flex-row justify-between">
        <label htmlFor="departureDate">Departure Date</label>
        <input
          type="date"
          id="departureDate"
          className="rounded-md p-1 w-7/12 text-xs text-color2 pl-2"
          placeholder="From"
          min={today}
          value={departureDate}
          onChange={handleDateChange}
        />
      </div>
      <div className="flex flex-row justify-between">
        <label htmlFor="returnDate">Return Date</label>
        <input
          type="date"
          id="returnDate"
          className="rounded-md p-1 w-7/12 text-xs text-color2 pl-2"
          placeholder="From"
          min={departureDate || today}
          value={roundTrip ? returnDate : ""}
          onChange={handleDateChange}
          disabled={!roundTrip}
        />
      </div>
      <div className="-mt-2 flex flex-row justify-end items-center">
        <div style={{ transform: "scale(0.8)" }}>
          <BlueSwitch
            {...labelProps}
            checked={roundTrip}
            onChange={handleRoundTripChange}
          />
        </div>
        <p className="text-xs text-color4 -ml-1">Round Trip</p>
      </div>
    </div>
  );
}
