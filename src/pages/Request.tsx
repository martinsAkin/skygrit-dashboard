import { useState } from "react";
import DateRangePicker from "../components/DateRangePicker";
import RequestRefundDashboard from "../components/RequestRefundDashboard";
import FilterAndSearch from "../components/molecules/FilterAndSearch";

const Request = () => {
  const categories = [
    "All",
    "Pending",
    "In-progress",
    "Review",
    "Approved",
    "Declined",
  ];

  const [category, setCategory] = useState("All");

  return (
    <div className=" flex flex-col h-screen">
      
        {/* Title Section */}
        <section className="py-2 px-16 mt-3 bg-white border-b-[1px] border-b-[#E5E7EB]">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Refund and Cancellation
              </h2>
              <p className="text-[12px] text-[#727372]">
                Refund and cancellation requests appear here
              </p>
            </div>
            <DateRangePicker />
          </div>
        </section>

        {/* Categories + Search/Filter */}
        <section className="flex flex-col gap-6 py-2 px-8 mt-3 bg-white">
          <div className="flex flex-col">
            <article className="flex flex-row">
              {categories.map((list) => (
                <li
                  key={list}
                  className={`p-4 text-[14px] border-b-[1px] border-b-[#E5E7EB] cursor-pointer list-none
                    ${
                      category === list
                        ? "text-[#202223] font-semibold relative"
                        : "text-[#6E767A]"
                    }`}
                  onClick={() => setCategory(list)}
                >
                  {list}
                  {category === list && (
                    <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
                  )}
                </li>
              ))}
            </article>
          </div>

          <div className="p-4 border-[1px] border-[#E5E7EB] rounded-[8px] flex flex-col gap-6 mt-0">
            <FilterAndSearch />
            {/* Date & clear */}
            <div className="flex flex-row gap-4">
              <div className=" bg-[#F1F3F9] p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
                <p className="text-[13px] text-[#09090B] font-normal">
                  Date: April 23 - Feb 09, 2025
                </p>
              </div>
              <div className="p-2 flex flex-row items-center gap-4 rounded-[4px] border-[1px] border-[#E4E4E7] cursor-pointer">
                <button className="text-[14px] text-[#C77756] font-semibold cursor-pointer">
                  Clear filter
                </button>
              </div>
            </div>

            {/* Table */}
            <RequestRefundDashboard />
          </div>
        </section>
      </div>
  );
};

export default Request;
