/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import RefundCalculation from "./RefundCalculation";
import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import TicketTable from "../components/PolicyComponents";
import searchIcon from "/assets/Icons/Searchhh.svg";
import type {
  FlightButtonsProps,
  FlightType,
  PolicyDetailsProps,
  PolicyListProps,
} from "../interface";

export const SearchPolicy = ({
  policies,
  selectedFlightType,
  selectedPolicy,
  onSelectPolicy,
}: PolicyListProps) => {
  // if (!selectedFlightType) {
  //   return <p>Select a flight type to view available policies</p>
  // }

  // const [active, setActive] = useState(data[0].id);
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="border-1 border-gray-200 rounded-md max-w-xl">
      <div className="flex flex-row w-[95%] m-2.5 px-4 py-2.5 gap-3 bg-gray-50 border border-gray-300 rounded items-center hover:border-blue-400 transition-colors">
        <img src={searchIcon} alt="" />
        <input
          className="w-full outline-none text-[14px] font-medium bg-transparent placeholder-gray-400"
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
        />
      </div>

      {/* <h2 className="text-lg font-semibold mb-3 capitalize">
          {selectedFlightType} flight policies
        </h2> */}

      <div>
        {policies.map((dataItems: any) => (
          <div
            key={dataItems.id}
            onClick={() => onSelectPolicy(dataItems)}
            className={`flex overflow-hidden border-1 border-t-gray-300 border-b-0 border-l-0 border-r-0 px-4 py-1 cursor-pointer items-start
            ${
              selectedPolicy?.id === dataItems.id
                ? "bg-[#EFF6FF] border-l-2 border-l-[#0D47A1] border-0 border-b-0 border-t-0"
                : ""
            }
            `}
          >
            <div className="flex flex-col gap-1.5">
              <h2 className="text-lg font-medium">{dataItems.heading}</h2>
              <span className="text-[12px] text-[#6B7280]">
                {dataItems.desc}
              </span>
              <span className="text-[12px] text-[#6B7280]">
                Last Updated: {dataItems.lastUpdated}
              </span>
            </div>

            <div className="status">{dataItems.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const FlightTypeToggle: React.FC<FlightButtonsProps> = ({
  selectedFlightType,
  onSelect,
}) => {
  const flightTypes: FlightType[] = ["Domestic", "International", "Regional"];

  // const [selected, setSelected] = useState<string>(flightTypes[0]);
  // const [ selectedSubTab, setSelectedSubTab ] = useState<"Domestic" | "International" | "Regional"> ("Domestic")

  return (
    <div className=" p-[5px] flex rounded-2xl w-max  gap-4">
      {flightTypes.map((flight): any => (
        <div
          key={flight}
          onClick={() => onSelect(flight)}
          className={`flightType-toggle cursor-pointer ${
            selectedFlightType === flight
              ? "bg-[#0D47A1] text-white"
              : "bg-none"
          }`}
        >
          {flight} Flight
        </div>
      ))}
    </div>
  );
};

export const PolicyDetails: React.FC<PolicyDetailsProps> = ({
  selectedFlightType,
  selectedPolicy,
}) => {
  const [activeSubTab, setActiveSubTab] = useState<
    "policyMatrix" | "refundAmount" | "reRouting"
  >("policyMatrix");

  if (selectedPolicy) {
    return (
      <section className="border border-gray-200 rounded-lg ">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-medium text-[#111827]">
            Policy Details
          </span>
          <button>
            <img src={menuOptIcon} alt="menu" title="menu" />
          </button>
        </div>

        <hr />

        <div className="p-[10px]">
          <ol className="list-none">
            <ul className="flex gap-[10rem]">
              <li>
                <h2 className="data-heading">Policy Name</h2>
                <span className="data-value">{selectedPolicy.heading}</span>
              </li>
              <li>
                <h2 className="data-heading">Status</h2>
                <span className="data-value">{selectedPolicy.status}</span>
              </li>
            </ul>

            <li className="mt-4">
              <h2 className="data-heading">Description</h2>
              <span className="data-value">{selectedPolicy.desc}</span>
            </li>
          </ol>
        </div>

        <div className="flex gap-8 pl-[15px] pt-10 pb-3">
          <button
            onClick={() => setActiveSubTab("policyMatrix")}
            className={`
                   cursor-pointer
                   hover:text-blue-400
                   transition ${
                     activeSubTab === "policyMatrix"
                       ? "text-blue-600"
                       : "text-black"
                   }
                   `}
          >
            Policy Matrix
          </button>
          <button
            onClick={() => setActiveSubTab("refundAmount")}
            className={`
                   cursor-pointer
                   hover:text-blue-400
                   transition ${
                     activeSubTab === "refundAmount"
                       ? "text-blue-600"
                       : "text-black"
                   }
                   `}
          >
            Refund Amounts
          </button>
          <button
            onClick={() => setActiveSubTab("reRouting")}
            className={`
                   cursor-pointer
                   hover:text-blue-400
                   transition ${
                     activeSubTab === "reRouting"
                       ? "text-blue-600"
                       : "text-black"
                   }
                   `}
          >
            Rerouting
          </button>
        </div>
        <hr />

        <div>
          {activeSubTab === "policyMatrix" && <TicketTable />}
          {activeSubTab === "refundAmount" && <RefundCalculation />}
        </div>
      </section>
    );
  }

  if (selectedFlightType) {
    return <p>Select a policy to view its details</p>;
  }

  return <p>No policy selected yet!</p>;
};

interface TicketClass {
  ticketClass: string;
  policyId?: number;
  routeType?: string;
  cabinType?: string;
  [key: string]: any;
}

interface Header {
  name: string;
}

export default function TicketTable() {
  // 🔹 Mock header data (instead of fetching from API)
  const [headers] = useState<Header[]>([
    { name: "Yanky" },
    { name: "Mike" },
    { name: "Martins" },
    { name: "Nancy" },
    { name: "Bravo" },
    { name: "Skygrit" },
  ]);

  // 🔹 Mock ticket class data
  const [apiData] = useState<TicketClass[]>([
    {
      ticketClass: "Yanky",
      policyId: 1,
      routeType: "DOMESTIC",
      cabinType: "ECONOMY",
      directSale: true,
      refundable: true,
    },
    {
      ticketClass: "Nancy",
      policyId: 2,
      routeType: "DOMESTIC",
      cabinType: "ECONOMY",
      inDirectSale: true,
      nonRefundable: true,
    },
    {
      ticketClass: "X-ray",
      policyId: 3,
      routeType: "INTERNATIONAL",
      cabinType: "BUSINESS",
      directSale: true,
      roundTrip: true,
    },
    {
      ticketClass: "Skygrit",
      policyId: 3,
      routeType: "INTERNATIONAL",
      cabinType: "BUSINESS",
      directSale: true,
      roundTrip: false,
      adult: true,
      multiCity: true,
      individual: true,
    },
  ]);

  const [editableData, setEditableData] = useState<TicketClass[]>(
    JSON.parse(JSON.stringify(apiData))
  );
  const [changedTicketClasses, setChangedTicketClasses] = useState<Set<string>>(
    new Set()
  );
  const [responseMessage, setResponseMessage] = useState<string>("");

  const rowHeaders = [
    { label: "Direct sale from airline", key: "directSale" },
    { label: "Indirect sales (OTAs, GDS, Agencies)", key: "inDirectSale" },
    { label: "Refundable", key: "refundable" },
    { label: "Non-refundable", key: "nonRefundable" },
    { label: "One-way", key: "oneWay" },
    { label: "Round-trip", key: "roundTrip" },
    { label: "Multi-city", key: "multiCity" },
    { label: "Waiver", key: "waiver" },
    { label: "Adult", key: "adult" },
    { label: "Child", key: "child" },
    { label: "Infant", key: "infant" },
    { label: "Individual", key: "individual" },
    { label: "Group", key: "groupBooking" },
  ];

  const groupMap: Record<string, string[]> = {
    "Ticket sales (booking source)": ["directSale", "inDirectSale"],
    "Refund Ticket Type": ["refundable", "nonRefundable"],
    Trip: ["oneWay", "roundTrip", "multiCity"],
    "Waiver Set": ["waiver"],
    "Passenger Type": ["adult", "child", "infant"],
    "Ticket Type": ["individual", "groupBooking"],
  };

  const handleCheckboxChange = (
    ticketClass: string,
    key: string,
    checked: boolean
  ) => {
    setEditableData((prev) => {
      const updated = [...prev];
      let ticket = updated.find((t) => t.ticketClass === ticketClass);
      if (!ticket) {
        const original = apiData.find((t) => t.ticketClass === ticketClass);
        ticket = {
          ticketClass,
          policyId: original?.policyId ?? 1,
          routeType: original?.routeType ?? "DOMESTIC",
          cabinType: original?.cabinType ?? "ECONOMY",
        };
        updated.push(ticket);
      }
      ticket[key] = checked;

      const originalValue = apiData.find(
        (t) => t.ticketClass === ticketClass
      )?.[key];
      setChangedTicketClasses((prevSet) => {
        const newSet = new Set(prevSet);
        if (checked !== originalValue) {
          newSet.add(ticketClass);
        } else {
          newSet.delete(ticketClass);
        }
        return newSet;
      });

      return updated;
    });
  };

  const handleSave = () => {
    const payload = editableData.filter((t) =>
      changedTicketClasses.has(t.ticketClass)
    );
    if (payload.length === 0) {
      setResponseMessage("No changes to save.");
      return;
    }

    setResponseMessage("Mock Save:\n" + JSON.stringify(payload, null, 2));
    setChangedTicketClasses(new Set());
  };

  return (
    <div className="p-1.5 bg-gray-100 min-h-screen">
      {responseMessage && (
        <pre className="bg-gray-200 p-4 rounded mb-6 max-w-3xl mx-auto whitespace-pre-wrap">
          {responseMessage}
        </pre>
      )}
      <div className="flex justify-between items-center p-2.5">
        <span className="text-2xl">Cancellation & Refund Policy Matrix</span>
        <button className="px-5 py-2 border border-gray-200 rounded-2xl">
          Edit
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table-auto w-full bg-gray-200 shadow border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-[0.35rem] text-[11px] font-bold text-left">
                Categories
              </th>
              <th className="border border-gray-300 p-[0.35rem] text-[11px] font-bold text-left">
                Sub-categories
              </th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="border p-2 text-[10px] border-gray-400 text-gray-700"
                >
                  {header.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.entries(groupMap).map(([groupLabel, keys]) =>
              keys.map((key, i) => {
                const rowHeader = rowHeaders.find((rh) => rh.key === key);
                if (!rowHeader) return null;
                return (
                  <tr key={key} className="text-[10px]">
                    {i === 0 && (
                      <th
                        className="border border-gray-400 p-[0.35rem] pr-0 text-gray-800 text-left"
                        rowSpan={keys.length}
                      >
                        {groupLabel}
                      </th>
                    )}
                    <th className="border p-[0.35rem] border-gray-400 text-left">
                      {rowHeader.label}
                    </th>
                    {headers.map((header) => {
                      const ticket = editableData.find(
                        (t) => t.ticketClass === header.name
                      );
                      const checked = ticket ? Boolean(ticket[key]) : false;
                      return (
                        <td
                          key={header.name + key}
                          className="border p-2 text-left border-gray-400"
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={(e) =>
                              handleCheckboxChange(
                                header.name,
                                key,
                                e.target.checked
                              )
                            }
                            className="w-5 h-5 accent-blue-600 cursor-pointer"
                          />
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      <button
        onClick={handleSave}
        className="mt-6 block mx-auto px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Save Changes
      </button>
    </div>
  );
}
