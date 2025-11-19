// import React from 'react'

import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import addIcon from "/assets/Icons/material-symbols_add-rounded.svg";
import editIcon from "/assets/Icons/edit-outline.svg";
import deleteIcon from "/assets/Icons/delete.svg";

interface TriggerAndRulesProps {
  id: string;
  triggerAndRulesName: string;
  event: string;
  channel: string;
  conditions: string;
  triggered: string | number;
  templates: string;
  status: string | boolean;
}
const initialTriggerAndRules: TriggerAndRulesProps[] = [
  {
    id: "1",
    triggerAndRulesName: "Booking Confirmation",
    event: "Event: booking_confirmed",
    channel: "Emails sms",
    conditions: "Payment successful",
    triggered: "1,284 times",
    templates: "Booking Confirmation",
    status: "Active",
  },
  {
    id: "2",
    triggerAndRulesName: "Flight Delay Notification",
    event: "Timing: 24 hours before departure",
    channel: "Emails, sms",
    conditions: "Passenger not checked in",
    triggered: "1,284 times",
    templates: "Booking Confirmation",
    status: "Active",
  },
  {
    id: "3",
    triggerAndRulesName: "Check-in Reminder",
    event: "Event: booking_confirmed",
    channel: "Emails, sms",
    conditions: "Delay > 30 minutes",
    triggered: "1,284 times",
    templates: "Flight Delay Notification",
    status: "Active",
  },
  {
    id: "4",
    triggerAndRulesName: "Gate Change Alert",
    event: "Event: booking_confirmed",
    channel: "Emails, sms",
    conditions: "Passenger checked in",
    triggered: "1,284 times",
    templates: "Gate Change Alert",
    status: "Inactive",
  },
];

const TriggerAndRulesContent = () => {
  const navigate = useNavigate();
  const [triggerAndRules, setTriggerAndRules] = useState(
    initialTriggerAndRules
  );

  const handleDelete = (index: number) => {
    if (
      window.confirm(
        `Are you sure you want to delete "${triggerAndRules[index].triggerAndRulesName}"?`
      )
    ) {
      setTriggerAndRules(triggerAndRules.filter((_, i) => i !== index));
    }
  };

  const handleEdit = (id: string) => {
    navigate(`/triggerAnddRules/edit/${id}`);
  };

  const handleCardClick = (id: string) => {
    navigate(`/triggerAnddRules/${id}`);
  };
  // To this (to track each trigger's state):
  const [toggles, setToggles] = useState<Record<string, boolean>>(
    initialTriggerAndRules.reduce((acc, trigger) => {
      acc[trigger.id] = trigger.status === "Active";
      return acc;
    }, {} as Record<string, boolean>)
  );

  // Update the handleToggle function:
  const handleToggle = (id: string) => {
    setToggles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Trigger Rules
          </h2>
          <p className="text-[14px] text-gray-500 mt-1">
            Configure when and how notifications are sent to passengers.
          </p>
        </div>
        <NavLink to="/create-trigger">
          <button className="flex gap-1.5 flex-row items-center justify-center px-4 py-2.5 bg-[#0D47A1] text-white rounded-[8px] text-[14px] font-medium hover:bg-[#1565C0] transition">
            <img src={addIcon} alt="add" />
            <p>New Trigger</p>
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col">
        {triggerAndRules.map((trigger, index) => (
          <div
            key={trigger.id}
            className="p-6 border border-[#DCDEE6] rounded-lg mb-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleCardClick(trigger.id)}
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex flex-row items-start gap-9 flex-1">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    {trigger.triggerAndRulesName}
                  </h3>
                  <p className="text-sm text-gray-600">{trigger.event}</p>
                </div>
                <div>
                  <span
                    className={`text-sm font-medium px-2 py-1 rounded-full ${
                      trigger.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {trigger.status}
                  </span>
                </div>
              </div>
              <div onClick={(e) => e.stopPropagation()}>
                <span className="flex flex-row items-center">
                  <span>
                    <button
                      onClick={() => handleToggle(trigger.id)}
                      className={`relative w-12 h-6 rounded-full transition-colors duration-300 ${
                        toggles[trigger.id] ? "bg-blue-800" : "bg-gray-400"
                      }`}
                    >
                      <span
                        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                          toggles[trigger.id]
                            ? "translate-x-6"
                            : "translate-x-0.5"
                        }`}
                      />
                    </button>
                    {/* Toggle button */}
                    {/* <button
                      onClick={() => handleToggle()}
                      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${
                        true ? "bg-deep-blue" : "bg-gray-300"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                          false ? "translate-x-6" : "translate-x-0"
                        }`}
                      />
                    </button> */}
                  </span>
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={editIcon}
                    alt="Edit"
                    onClick={() => handleEdit(trigger.id)}
                  />
                  {/* <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={viewIcon}
                    alt="View"
                    // onClick={() => handleView(template.id)}
                  />
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={copyIcon}
                    alt="Copy"
                    // onClick={() => handleCopy(template)}
                  /> */}
                  <img
                    className="ml-6 cursor-pointer hover:opacity-70"
                    src={deleteIcon}
                    alt="Delete"
                    onClick={() => handleDelete(index)}
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-20 mb-4">
              <span>
                <h3 className="text-gray-600">Templates</h3>
                <p>{trigger.templates}</p>
              </span>
              <span>
                <h3 className="text-gray-600">Channels</h3>
                <p>{trigger.channel}</p>
              </span>
              <span>
                <h3 className="text-gray-600">Conditions</h3>
                <p>{trigger.conditions}</p>
              </span>
              <span>
                <h3 className="text-gray-600">Triggered</h3>
                <p>{trigger.triggered}</p>
              </span>
            </div>
            <p className="text-gray-600">Last triggered: 2 minutes ago</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TriggerAndRulesContent;
