import PassengerNumControl from "./PassengerNumControl";

export default function CabinPassengerCard({
  setCabinClass,
  setAdultsCount,
  setChildrenCount,
}) {
  const handleCabinClassChange = (e) => setCabinClass(e.target.value);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between">
        <p className="text-[12px] text-color1 font-semibold">
          Travelers and Cabin Class
        </p>
        <select
          className="rounded-md p-1 w-4/12 text-xs text-color2 cursor-pointer"
          onChange={handleCabinClassChange}
        >
          <option value="Economy">Economy</option>
          <option value="Business">Business</option>
        </select>
      </div>
      <PassengerNumControl
        label="Adults"
        ageLabel="Age 12+"
        onCountChange={setAdultsCount}
      />
      <PassengerNumControl
        label="Children"
        ageLabel="Age 2-11"
        onCountChange={setChildrenCount}
      />
    </div>
  );
}
