/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import calendarIcon from "/assets/Icons/calendar-blank.svg";
import dropdownIcon from "/assets/Icons/Down.png";
const DateRangePicker = () => {
  const [startDate, setStartDate] = useState("2023-01-20");
  const [endDate, setEndDate] = useState("2023-02-09");
  const [open, setOpen] = useState(false);

  // Format date for display (YYYY-MM-DD → Jan 20, 2023)
  const formatDate = (dateString: any) =>
    new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

  return (
    <div className="relative">
      {/* Display Date */}
      <div
        className="p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <img src={calendarIcon} alt="calendar" />
        <p className="text-[12px] text-[#09090B] font-normal">
          {formatDate(startDate)} - {formatDate(endDate)}
        </p>
        <img className="w-[16px] h-[16px]" src={dropdownIcon} alt="calendar" />
      </div>

      {/* Dropdown with date inputs */}
      {open && (
        <div className="absolute mt-2 left-0 bg-white shadow-lg p-4 rounded-md border-[1px] border-[#E4E4E7] w-64 z-10">
          <div className="flex flex-col gap-3">
            <label className="flex flex-col text-sm font-medium">
              Start Date:
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border outline-0 rounded px-2 py-1 text-sm cursor-pointer"
              />
            </label>
            <label className="flex flex-col text-sm font-medium">
              End Date:
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border outline-0 rounded px-2 py-1 text-sm cursor-pointer"
              />
            </label>
            <button
              className="bg-[#0D47A1] text-white text-xs px-3 py-1 rounded hover:bg-blue-700 self-end"
              onClick={() => setOpen(false)}
            >
              Apply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangePicker;
