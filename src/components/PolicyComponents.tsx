/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import RefundCalculation from "./RefundCalculation";
import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import searchIcon from "/assets/Icons/Searchhh.svg";
import { ChevronDown } from "lucide-react";
import type {
 FlightButtonsProps,
 FlightType,
 Policy,
 PolicyDetailsProps,
 PolicyListProps,
 PolicyRefundMetric,
 Header,
 EditableRefundMetric,
} from "../interface";
import {
 fetchAllPolicies,
 createPolicyRefundMetric,
 fetchPolicyRefundMetrics,
 fetchTicketClasses,
} from "../api/policyManagementService";

export const SearchPolicy = ({
 selectedFlightType,
 selectedPolicy,
 onSelectPolicy,
}: PolicyListProps) => {
 const [policies, setPolicies] = useState<Policy[]>([]);
 const [searchTerm, setSearchTerm] = useState<string>("");

 useEffect(() => {
  fetchAllPolicies().then((data) => {
   if (Array.isArray(data)) {
    setPolicies(data);
   } else {
    console.error("Expected array, got:", data);
    setPolicies([]);
   }
  });
 }, []);

 console.log("Loaded policies:", policies);

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

   {selectedFlightType ? (
    <div>
     {policies.map((dataItems: any) => (
      <div
       key={dataItems.id}
       onClick={() => onSelectPolicy(dataItems)}
       className={`flex justify-between overflow-hidden border-1 border-t-gray-300 border-b-0 border-l-0 border-r-0 px-4 py-1 cursor-pointer items-start
            ${
             selectedPolicy?.id === dataItems.id
              ? "bg-[#EFF6FF] border-l-4 border-l-[#0D47A1] border-0 border-b-0 border-t-0"
              : ""
            }
            `}
      >
       <div className="flex flex-col gap-1.5">
        <h2 className="text-[15px] font-medium">{dataItems.cabinType}</h2>
        <span className="text-[14px] text-[#6B7280]">
         {dataItems.description}
        </span>
        <span className="text-[12px] text-[#6B7280]">
         Last Updated: {dataItems.updatedAt}
        </span>
       </div>

       <div
        className={
         dataItems.status === "ACTIVE"
          ? "status"
          : "bg-[#F3F4F6] flex items-center rounded-full px-2.5 py-1.5 text-[11px]"
        }
       >
        {dataItems.status}
       </div>
      </div>
     ))}
    </div>
   ) : (
    <p className="p-4">Please select a flight type to view policies.</p>
   )}
  </div>
 );
};

export const FlightTypeToggle: React.FC<FlightButtonsProps> = ({
 selectedFlightType,
 onSelect,
}) => {
 const flightTypes: FlightType[] = ["Domestic", "International", "Regional"];

 return (
  <div className=" p-[5px] flex rounded-2xl w-max  gap-4">
   {flightTypes.map((flight): any => (
    <div
     key={flight}
     onClick={() => onSelect(flight)}
     className={`flightType-toggle cursor-pointer ${
      selectedFlightType === flight ? "bg-[#0D47A1] text-white" : "bg-none"
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
     <span className="text-xl font-medium text-[#111827]">Policy Details</span>
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
        <span className="data-value">{selectedPolicy.name}</span>
       </li>
       <li>
        <h2 className="data-heading">Status</h2>
        <span className="data-value">{selectedPolicy.status}</span>
       </li>
      </ul>

      <li className="mt-4">
       <h2 className="data-heading">Description</h2>
       <span className="data-value">{selectedPolicy.description}</span>
      </li>
     </ol>
    </div>

    <div className="flex gap-8 pl-[15px] pt-10 pb-3">
     {[
      { id: "policyMatrix", label: "Policy Matrix" },
      { id: "refundAmount", label: "Refund Amounts" },
      { id: "reRouting", label: "Rerouting" },
     ].map(({ id, label }: any) => (
      <div key={id} className="relative">
       <button
        onClick={() => setActiveSubTab(id)}
        className={`cursor-pointer hover:text-blue-400 transition text-sm ${
         activeSubTab === id ? "text-blue-600" : "text-[#6B7280]"
        }`}
       >
        {label}
       </button>
       {activeSubTab === id && (
        <span className="absolute left-0 right-0 bottom-[-4px] h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
       )}
      </div>
     ))}
    </div>

    <hr />

    <div>
     {activeSubTab === "policyMatrix" && <TicketTable />}
     {activeSubTab === "refundAmount" && <RefundCalculation />}
     {activeSubTab === "reRouting" && <Rerouting />}
    </div>
   </section>
  );
 }

 if (selectedFlightType) {
  return <p>Select a policy to view its details</p>;
 }

 return <p>No policy selected yet!</p>;
};

// interface TicketClass {
//  ticketClass: string;
//  policyId?: number;
//  routeType?: string;
//  cabinType?: string;
//  [key: string]: any;
// }

export default function TicketTable() {
 const [responseMessage, setResponseMessage] = useState<string>("");
 const [headers, setHeaders] = useState<Header[]>([]);
 const [editableData, setEditableData] = useState<EditableRefundMetric[]>([]);
 const [apiData, setApiData] = useState<PolicyRefundMetric[]>([]);
 const [changedTicketClasses, setChangedTicketClasses] = useState<Set<string>>(
  new Set(),
 );

 useEffect(() => {
  const loadHeaders = async () => {
   try {
    const data = await fetchTicketClasses();
    setHeaders(data);
   } catch (error) {
    setResponseMessage(`Failed to load ticket classes. error: ${error}`);
   }
  };

  loadHeaders();
 }, []);

 useEffect(() => {
  const loadMetrics = async () => {
   try {
    const data = await fetchPolicyRefundMetrics();
    setApiData(data);
    setEditableData(JSON.parse(JSON.stringify(data)));
   } catch (error) {
    setResponseMessage(`Failed to load policy refund metrics. error: ${error}`);
   }
  };

  loadMetrics();
 }, []);

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

 const handleSave = async () => {
  if (!Array.isArray(editableData)) return null;

  const changed = editableData.filter((t) =>
   changedTicketClasses.has(t.ticketClass),
  );

  if (changed.length === 0) {
   setResponseMessage("No changes to save.");
   return;
  }

  const mapConditions = (keys: string[], selected: string[]) =>
   selected.filter((c) => keys.includes(c));

  const payload: PolicyRefundMetric[] = changed.map((t) => {
   const selected = t.selectedConditions ?? [];

   return {
    policyId: String(t.policyId ?? "1000"),
    cancellationType: t.cancellationType ?? "no reason",
    cabinType: t.cabinType ?? "ECONOMY",
    routeType: t.routeType ?? "DOMESTIC",
    ticketClass: t.ticketClass,
    refundTicketType:
     mapConditions(["refundable", "nonRefundable"], selected)[0] ?? "",
    tripType: mapConditions(["oneWay", "roundTrip", "multiCity"], selected),
    passengerType: mapConditions(["adult", "child", "infant"], selected),
    ticketType: mapConditions(["individual", "groupBooking"], selected),
    waiver: selected.includes("waiver"),
    ticketSales: mapConditions(["directSale", "inDirectSale"], selected),
   };
  });

  try {
   await createPolicyRefundMetric(payload);
   setResponseMessage("Saved successfully!");
   setChangedTicketClasses(new Set());
  } catch (error) {
   setResponseMessage(`Failed to save. Please try again.\n${String(error)}`);
  }
 };

 const handleCheckboxChange = (
  ticketClass: string,
  key: string,
  checked: boolean,
 ) => {
  setEditableData((prev) => {
   const updated = [...prev];
   const index = updated.findIndex((t) => t.ticketClass === ticketClass);
   const original = apiData.find((t) => t.ticketClass === ticketClass);

   let ticket: EditableRefundMetric;

   if (index !== -1) {
    ticket = { ...updated[index] };
   } else {
    ticket = {
     ticketClass,
     policyId: original?.policyId ?? 1,
     routeType: original?.routeType ?? "DOMESTIC",
     cabinType: original?.cabinType ?? "ECONOMY",
     selectedConditions: [],
    };
   }

   ticket.selectedConditions = ticket.selectedConditions || [];

   if (checked) {
    if (!ticket.selectedConditions.includes(key)) {
     ticket.selectedConditions.push(key);
    }
   } else {
    ticket.selectedConditions = ticket.selectedConditions.filter(
     (c) => c !== key,
    );
   }

   updated[index !== -1 ? index : updated.length] = ticket;

   // Compare with original to track changes
   const originalConditions = updated[index]?.selectedConditions || [];
   const sortedNew = [...ticket.selectedConditions].sort();
   const sortedOriginal = [...originalConditions].sort();

   const hasChanged =
    JSON.stringify(sortedNew) !== JSON.stringify(sortedOriginal);

   setChangedTicketClasses((prevSet) => {
    const newSet = new Set(prevSet);
    if (hasChanged) {
     newSet.add(ticketClass);
    } else {
     newSet.delete(ticketClass);
    }
    return newSet;
   });

   return updated;
  });
 };

 return (
  <div className="p-3 bg-[#FAFAFA] rounded-lg h-full m-4">
   {responseMessage && (
    <pre className=" p-4 mb-6 max-w-3xl mx-auto whitespace-pre-wrap">
     {responseMessage}
    </pre>
   )}
   <div className="flex justify-between items-center p-2.5">
    <span className="text-2xl">Eligibility Conditions</span>
    <button className="px-5 py-2 border border-gray-200 rounded-2xl">
     Edit
    </button>
   </div>
   <div className="overflow-x-auto rounded-lg">
    <table className="table-auto w-full bg-[#FAFAFA] shadow border-collapse">
     <thead>
      <tr>
       <th className="border border-[#CBD5E1] p-[0.35rem] text-[13px] font-medium text-left text-[#263238]">
        Categories
       </th>
       <th className="border border-[#CBD5E1] p-[0.35rem] text-[13px] font-medium text-left text-[#263238]">
        Sub-categories
       </th>
       {headers.map((header, idx) => (
        <th
         key={idx}
         className="border p-2 text-[13px] font-medium border-[#CBD5E1] text-[#263238]"
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
         <tr key={key}>
          {i === 0 && (
           <th
            className="border border-[#CBD5E1] p-[0.35rem] pr-0 text-[12px] font-medium text-left"
            rowSpan={keys.length}
           >
            {groupLabel}
           </th>
          )}
          <th className="border p-[0.35rem] border-[#CBD5E1] text-left text-[12px] font-medium">
           {rowHeader.label}
          </th>
          {headers.map((header) => {
           const ticket = editableData.find(
            (t) => t.ticketClass === header.name,
           );
           const checked = ticket?.selectedConditions?.includes(key) ?? false;
           return (
            <td
             key={header.name + key}
             className="border p-2 text-left border-[#CBD5E1]"
            >
             <input
              type="checkbox"
              checked={checked}
              onChange={(e) =>
               handleCheckboxChange(header.name, key, e.target.checked)
              }
              className="w-5 h-5 accent-blue-600 cursor-pointer"
             />
            </td>
           );
          })}
         </tr>
        );
       }),
      )}
     </tbody>
    </table>
   </div>
   <div className="flex flex-row items-center justify-end gap-4 mt-3">
    <button className=" px-6 py-2 border border-[#D1D5DB] rounded hover:bg-gray-300">
     Cancel
    </button>
    <button
     onClick={handleSave}
     className=" px-6 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700"
    >
     Save Changes
    </button>
   </div>
  </div>
 );
}

interface ReroutingData {
 id: number;
 operatingCarrier: string;
 baseFare: string;
 taxesFees: string;
 fuelSurcharge: string;
 airportServicesFees: string;
 ancillary: string;
 policyId: number;
 minimumhrs: number;
 maximumhrs: number;
}

const reroutingFields = [
 "Operating Carrier",
 "Base Fare",
 "Taxes Govt.Fees",
 "Fuel Surcharge",
 "Airport Services Fees",
 "Ancillary (seat + bag)",
 "Policy ID",
 "Minimum Hour To Flight",
 "Maximum Hour To Flight",
];

const initialRerouting: ReroutingData[] = [
 {
  id: 1,
  operatingCarrier: "Airpeace",
  baseFare: "80%",
  taxesFees: "0%",
  fuelSurcharge: "100%",
  airportServicesFees: "100%",
  ancillary: "0%",
  policyId: 600,
  minimumhrs: 1,
  maximumhrs: 2,
 },
 {
  id: 2,
  operatingCarrier: "Ibom Air",
  baseFare: "20%",
  taxesFees: "0%",
  fuelSurcharge: "100%",
  airportServicesFees: "100%",
  ancillary: "0%",
  policyId: 600,
  minimumhrs: 3,
  maximumhrs: 5,
 },
 {
  id: 3,
  operatingCarrier: "Valuejet",
  baseFare: "10%",
  taxesFees: "0%",
  fuelSurcharge: "100%",
  airportServicesFees: "100%",
  ancillary: "0%",
  policyId: 600,
  minimumhrs: 1,
  maximumhrs: 2,
 },
];

const carrierOptions = [
 "Airpeace",
 "Ibom Air",
 "Valuejet",
 "Air Peace",
 "Dana Air",
];

export const Rerouting = () => {
 const [reRouting, setReRouting] = useState<ReroutingData[]>(initialRerouting);

 const handleUpdate = (
  id: number,
  field: keyof ReroutingData,
  value: string | number,
 ) => {
  setReRouting(
   reRouting.map((route) =>
    route.id === id ? { ...route, [field]: value } : route,
   ),
  );
 };

 // const handleDeleteRow = (id: number) => {
 //   setReRouting(reRouting.filter((route) => route.id !== id));
 // };

 const handleAddRow = () => {
  const newRoute: ReroutingData = {
   id: Math.max(...reRouting.map((r) => r.id)) + 1,
   operatingCarrier: "Airpeace",
   baseFare: "0%",
   taxesFees: "0%",
   fuelSurcharge: "0%",
   airportServicesFees: "0%",
   ancillary: "0%",
   policyId: 600,
   minimumhrs: 0,
   maximumhrs: 0,
  };
  setReRouting([...reRouting, newRoute]);
 };

 return (
  <div className="max-w-7xl bg-[#FAFAFA]">
   <section>
    <div className=" rounded-lg shadow-sm border border-gray-200">
     <div className="px-9 py-6 border-b border-gray-200">
      <h2 className="text-2xl font-semibold mb-4">Rerouting Calculation</h2>
     </div>

     <div className="overflow-x-auto">
      <table className="w-full border-collapse">
       <thead>
        <tr className="bg-gray-50">
         {reroutingFields.map((field, index) => (
          <th
           key={index}
           className="px-6 py-4 text-left text-lg font-medium text-[#263238] border-b border-gray-200 whitespace-nowrap"
          >
           {field}
          </th>
         ))}
         {/* <th className="px-6 py-4 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                    Actions
                  </th> */}
        </tr>
       </thead>
       <tbody>
        {reRouting.map((route) => (
         <tr
          key={route.id}
          className="border-b border-gray-100 hover:bg-gray-50 "
         >
          {/* Operating Carrier */}
          <td className="px-6 py-4 border-b border-gray-200 text-sm">
           <div className="relative">
            <select
             value={route.operatingCarrier}
             onChange={(e) =>
              handleUpdate(route.id, "operatingCarrier", e.target.value)
             }
             className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
            >
             {carrierOptions.map((option) => (
              <option key={option} value={option}>
               {option}
              </option>
             ))}
            </select>
            <ChevronDown
             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
             size={18}
             color="black"
            />
           </div>
          </td>

          {/* Base Fare */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="text"
            value={route.baseFare}
            onChange={(e) => handleUpdate(route.id, "baseFare", e.target.value)}
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Taxes Govt Fees */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="text"
            value={route.taxesFees}
            onChange={(e) =>
             handleUpdate(route.id, "taxesFees", e.target.value)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Fuel Surcharge */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="text"
            value={route.fuelSurcharge}
            onChange={(e) =>
             handleUpdate(route.id, "fuelSurcharge", e.target.value)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Airport Services Fees */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="text"
            value={route.airportServicesFees}
            onChange={(e) =>
             handleUpdate(route.id, "airportServicesFees", e.target.value)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Ancillary */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="text"
            value={route.ancillary}
            onChange={(e) =>
             handleUpdate(route.id, "ancillary", e.target.value)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Policy ID */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="number"
            value={route.policyId}
            onChange={(e) =>
             handleUpdate(route.id, "policyId", parseInt(e.target.value) || 0)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Minimum Hours */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="number"
            value={route.minimumhrs}
            onChange={(e) =>
             handleUpdate(route.id, "minimumhrs", parseInt(e.target.value) || 0)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* Maximum Hours */}
          <td className="px-6 py-4 border-b border-gray-200">
           <input
            type="number"
            value={route.maximumhrs}
            onChange={(e) =>
             handleUpdate(route.id, "maximumhrs", parseInt(e.target.value) || 0)
            }
            className="w-full  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-4 py-2 text-gray-700 focus:outline-none focus:border-blue-400 text-sm"
            placeholder="0%"
           />
          </td>

          {/* <td className="px-6 py-4 border-b border-gray-200">
                      <button
                        onClick={() => handleDeleteRow(route.id)}
                        className="text-red-600 hover:text-red-800 font-medium text-sm"
                      >
                        Delete
                      </button>
                    </td> */}
         </tr>
        ))}
       </tbody>
      </table>
     </div>

     {/* Footer Actions */}
     <div className="px-9 py-4 border-t border-gray-200 flex justify-between items-center">
      <button
       onClick={handleAddRow}
       className="px-6 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium"
      >
       Add Row
      </button>
      {/* <button
              onClick={() => {
                console.log("Saving data:", reRouting);
                alert("Data saved! Check console for output.");
              }}
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              Save Changes
            </button> */}
      <div className="flex flex-row items-center justify-end gap-4 mt-3 mr-16">
       <button className=" px-6 py-2 border border-[#D1D5DB] rounded hover:bg-gray-300">
        Cancel
       </button>
       <button
        onClick={() => {
         console.log("Saving data:", reRouting);
         alert("Data saved! Check console for output.");
        }}
        className=" px-6 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700"
       >
        Save Changes
       </button>
      </div>
     </div>
    </div>
   </section>
  </div>
 );
};
