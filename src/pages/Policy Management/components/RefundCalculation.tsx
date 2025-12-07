/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchCancellationReasons, fetchTicketClasses, saveRefundMetric, fetchRefundMetrics } from "../../../api/policyManagementService";
import type { RefundRowType, RefundData, CancellationReason } from "../../../interface";
import RefundTable, {
 ActionButtons,
} from "../../Request/components/RefundTable";

import { useEffect, useState } from "react";

const refundRows: RefundRowType[] = [
 { label: "Refund Timeline", type: "select", key: "refundTimeLine" },
 { label: "Min Hour To Flight", type: "number", key: "minHoursBeforeFlight" },
 { label: "Max Hour To Flight", type: "number", key: "maxHoursBeforeFlight" },
 { label: "Base Fare", type: "number", key: "baseFare" },
 { label: "Taxes & Govt. Fees", type: "number", key: "tax" },
 { label: "Fuel Surcharge", type: "number", key: "fuelSurcharge" },
 { label: "Airport Service Fees", type: "number", key: "airportServiceFees" },
 { label: "Ancillary (seat + bag)", type: "number", key: "ancillary" },
 {
  label: "Penalty fee (% or flat rate)",
  type: "number",
  key: "penaltyValue",
 },
];

const refundTimelineOptions = [
 "14 Days",
 "7 Days",
 "Instantly",
 "Hourly",
 "Next Day",
];

export default function RefundCalculation() {
 const [ticketClasses, setTicketClasses] = useState<string[]>([]);
 const [reasons, setReasons] = useState<CancellationReason[]>([]);
 const [refundDataMap, setRefundDataMap] = useState<Record<string, any>>({});
 const [changed, setChanged] = useState(false);

 // fetch reasons
 const fetchReasons = async () => {
  try{
    const data = await fetchCancellationReasons()
    setReasons(data);
  } catch (e) {
    console.error("Error:", e)
  }
 }
 useEffect(() => {
  fetchReasons()
 }, []);

 const loadTcketClasses = async () => {
   try {
    const data = await fetchTicketClasses();
    setTicketClasses(data.map((t) => t.name));
   } catch (error) {
    console.error(`Failed to load ticket classes. error: ${error}`);
   }
  };
   useEffect(() => {
  loadTcketClasses();
 }, []);

 const fetchRefundMetricsAndSet = async () => {
  try {
    const data = await fetchRefundMetrics("ECONOMY", "DOMESTIC");

    if (data?.success && Array.isArray(data.response)) {
      const map: Record<string, RefundData> = {};
      data.response.forEach((item: RefundData) => {
        map[`${item.reason}_${item.ticketClass}`] = item;
      });
      setRefundDataMap(map); 
    } else {
      console.warn("Unexpected response format:", data);
    }
  } catch (error) {
    console.error("Failed to fetch refund metrics:", error);
  }
};

useEffect(() => {
  fetchRefundMetricsAndSet();
}, []);

 const handleChange = () => setChanged(true);

 const collectTableData = (): RefundData[] => {
  const rows: RefundData[] = [];
  reasons.forEach((reason) => {
   ticketClasses.forEach((tc) => {
    const compoundKey = `${reason}_${tc}`;
    const existing = refundDataMap[compoundKey] || {};
    const row: any = {
      policyId: String(existing.policyId ?? 1),
      routeType: "DOMESTIC",
      cabinType: "ECONOMY",
      ticketClass: tc,
      reason,
      baseFare: existing.baseFare ?? 0,
      tax: existing.tax ?? 0,
      fuelSurcharge: existing.fuelSurcharge ?? 0,
      airportServiceFees: existing.airportServiceFees ?? 0,
      ancillary: existing.ancillary ?? 0,
      penaltyValue: existing.penaltyValue ?? 0,
      refundTimeLine: existing.refundTimeLine ?? "",
      minHoursBeforeFlight: existing.minHoursBeforeFlight ?? 0,
      maxHoursBeforeFlight: existing.maxHoursBeforeFlight ?? 0,
    };

    refundRows.forEach((r) => {
     const input = document.querySelector<HTMLInputElement | HTMLSelectElement>(
      `[data-reason="${reason}"][data-ticketclass="${tc}"][data-key="${r.key}"]`,
     );
     if (input) {
      const value = input.value;
      row[r.key] =
       value === "" ? null : isNaN(Number(value)) ? value : Number(value);
      if (value !== String(input.dataset.original)) {
       row._changed = true;
      }
     }
    });

    if (row._changed) {
     delete row._changed;
     rows.push(row);
    }
   });
  });
  return rows;
 };

 const handleSave = async () => {
    const payload = collectTableData();
    try{
      await saveRefundMetric(payload)
      alert("Refund metrics saved successfully!");
      console.log("Saved payload:", payload);
      setChanged(false);
    } catch (e){
      console.error("Error while saving metric:", e)
    }
  }

 return (
  <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
   <h1 className="text-2xl font-bold text-gray-800 mb-6">Refund Calculation</h1>

   <RefundTable
    ticketClasses={ticketClasses}
    reasons={reasons}
    refundDataMap={refundDataMap}
    refundRows={refundRows}
    refundTimelineOptions={refundTimelineOptions}
    onChange={handleChange}
   />

   <ActionButtons
    changed={changed}
    onSave={handleSave}
    onCancel={() => setChanged(false)}
   />
  </div>
 );
}
