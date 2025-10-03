/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import RefundCalculation from "./RefundCalculation";

 const placeholderData = [
   {
    heading: "Standard Economy Policy",
    desc: "Default refund policy for economy class tickets",
    lastUpdate: "2023-10-15",
    status: "Active"
   },
   {
    heading: "Business Class Refund Policy",
    desc: "Default refund policy for economy class tickets",
    lastUpdate: "2023-10-15",
    status: "Inactive"
   },
   {
    heading: "First Class Refund Policy",
    desc: "Default refund policy for economy class tickets",
    lastUpdate: "2023-10-15",
    status: "Active"
   },
   {
    heading: "Holiday Season Special Policy",
    desc: "Default refund policy for economy class tickets",
    lastUpdate: "2023-10-15",
    status: "Inactive"
   }
 ]

export const SearchPolicy = () => {
 return(
    <div className="border-1 border-gray-400 rounded-md w-[20rem] h-max">
      <div className="p-2.5 mx-0">
       <input
        type="text"
        name=""
        id=""
        placeholder="Search Policies"
        className="bg-gray-400 p-1 rounded-sm text-sm w-[95%]"
       />
      </div>

      <div className="">
       {placeholderData.map((dataItems, index) => (
        <div key={index} className="flex overflow-hidden border-1 border-t-black border-b-black border-l-0 border-r-0 p-1.5 hover:bg-teal-400 hover:border-l-2 hover:border-0">
          <div className="flex flex-col gap-1">
           <h2>{dataItems.heading}</h2>
           <span className="text-[13px]">{dataItems.desc}</span>
           <span>Last Updated: {dataItems.lastUpdate}</span>
          </div>

          <div className="status">{dataItems.status}</div>
        </div>
       ))}
      </div>
    </div>
 )
}

export const FlightTypeToggle = () => {
  return(
    <div className="bg-blue-300 p-[5px] flex rounded-2xl w-[17rem] h-max">
      <div className="flightType-toggle">Domestic Flight</div>
      <div className="flightType-toggle">International Flight</div>
    </div>
  )
}

export const PolicyDetails = () => {

  const [ activeSubTab, setActiveSubTab ] = useState<"policyMatrix" | "refundAmount"> ("policyMatrix")
  const Data = placeholderData[1]

  return(
    <section className="border border-gray-500">
        <div className="flex justify-between items-center p-2.5">
          <span>Policy Details</span>
          <button className="px-5 py-2 border border-gray-500 rounded-2xl">Edit</button>
        </div>

        <hr />

        <div className="p-[10px]">
          <ol className="list-none">
            <ul className="flex gap-[10rem]">
              <li>
                <h2 className="data-heading">Policy Name</h2>
                <span className="data-value">{Data.heading}</span>
              </li>
              <li>
                <h2 className="data-heading">Status</h2>
                <span className="data-value">{Data.status}</span>
              </li>
            </ul>

            <li className="mt-4">
              <h2 className="data-heading">Description</h2>
              <span className="data-value">{Data.desc}</span>
            </li>
          </ol>  
        </div>

          {/* css styling just to confirm something */}
        <div className="flex gap-8 pl-[15px] pt-10 pb-3">
          <button 
            onClick={() => setActiveSubTab("policyMatrix")}
            className={`
              cursor-pointer 
              hover:text-blue-400
              transition ${
                activeSubTab === "policyMatrix" ? "text-blue-600" : "text-black"
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
                activeSubTab === "refundAmount" ? "text-blue-600" : "text-black"
              }
              `}
          >
            Refund Amounts
          </button>
        </div>
        <hr />

        <div>
            {activeSubTab === "policyMatrix" && <TicketTable/> }
            {activeSubTab === "refundAmount" && <RefundCalculation/> }
        </div>
        
          {/* <section>
              <TicketTable />
          </section> */}

    </section>
  )
}




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
  const [changedTicketClasses, setChangedTicketClasses] = useState<
    Set<string>
  >(new Set());
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

      const originalValue = apiData.find((t) => t.ticketClass === ticketClass)?.[
        key
      ];
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
          <button className="px-5 py-2 border border-gray-500 rounded-2xl">Edit</button>
        </div>
      <div className="overflow-x-auto rounded-lg">
        <table className="table-auto w-full bg-gray-200 shadow border-collapse">
          <thead>
            <tr>
              <th className="border border-gray-300 p-[0.35rem] text-[11px] font-bold text-left">Categories</th>
              <th className="border border-gray-300 p-[0.35rem] text-[11px] font-bold text-left">Sub-categories</th>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="border p-2 text-[10px] border-gray-400 text-white bg-amber-700"
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
                  <tr
                    key={key}
                    className="text-[10px]"
                  >
                    {i === 0 && (
                      <th
                        className="border border-gray-400 p-[0.35rem] pr-0 text-gray-800 bg-red-400 text-left"
                        rowSpan={keys.length}
                      >
                        {groupLabel}
                      </th>
                    )}
                    <th className="border p-[0.35rem] border-gray-400 text-left">{rowHeader.label}</th>
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