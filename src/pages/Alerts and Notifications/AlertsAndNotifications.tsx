import { useState } from "react";
import FilterAndSearchh from "../../components/molecules/FilterAndSearchh";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import { NavLink } from "react-router-dom";
import AlertAndNotificationComponents from "./components/AlertAndNotificationComponents";
// import { data } from "react-router";
const AlertsAndNotifications = () => {
  const categories = [
    "Templates",
    "Trigger & Rules",
    "Delivery & Analytics",
    "Channel Settings",
  ];
  const [category, setCategory] = useState("Templates");
  // const FilteredData =
  //   category === "Templates"
  //     ? data
  //     : data.filter((item) => item.status === category);
  return (
    <div>
      <div className="py-4 px-16 flex flex-col gap-9">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Engine
          </h2>
          <p className="text-[14px] text-gray-500 mt-1">
            Configure and manage passenger communications across all channels
          </p>
        </div>
        <div className="flex flex-col mb-9">
          <article className="flex flex-row">
            {categories.map((list) => (
              <ul
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
              </ul>
            ))}
          </article>
        </div>
        {/* <div className="p-6">
          {category === "Trigger & Rules" ? (
            <TriggerAndRulesContent />
          ) : category === "Delivery & Analytics" ? (
            <DeliveryAndAnalyticsContent />
          ) : (
            <ChannelsContent />
          )}
        </div> */}
        <div className="flex justify-between items-center">
          <FilterAndSearchh />
          <NavLink to="/create-template">
            <button className="flex gap-1.5 flex-row items-center justify-center px-4 py-2.5 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#1565C0] transition">
              <img src={addIcon} alt="add" />
              <p>New Template</p>
            </button>
          </NavLink>
        </div>
        <div>
          {/* Table Component */}
          <AlertAndNotificationComponents />
        </div>
      </div>
    </div>
  );
};

export default AlertsAndNotifications;
