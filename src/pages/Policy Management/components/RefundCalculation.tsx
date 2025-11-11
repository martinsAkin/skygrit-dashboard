/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RefundRowType, RefundData } from "../../../interface";
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
  const [reasons, setReasons] = useState<string[]>([]);
  const [refundDataMap, setRefundDataMap] = useState<Record<string, any>>({});
  const [changed, setChanged] = useState(false);

  // fetch reasons
  useEffect(() => {
    fetch("http://localhost:8093/api/v1/cancellation/reason")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.response)) {
          setReasons(data.response.map((item: any) => item.reason));
          fetchTicketClasses();
        }
      })
      .catch(() => setReasons([]));
  }, []);

  const fetchTicketClasses = () => {
    fetch("http://localhost:8093/api/v1/ticket-class")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success && Array.isArray(data.response)) {
          const classes = data.response.map((item: any) => item.name);
          setTicketClasses(classes);
          fetchRefundMetrics(classes);
        }
      });
  };

  const fetchRefundMetrics = (tcs: string[]) => {
    fetch(
      "http://localhost:8093/api/v1/refund-metric/list?cabinType=ECONOMY&routeType=DOMESTIC"
    )
      .then((res) => res.json())
      .then((data) => {
        const map: Record<string, any> = {};
        if (data?.success && Array.isArray(data.response)) {
          data.response.forEach((item: any) => {
            map[`${item.reason}_${item.ticketClass}`] = item;
          });
        }
        setRefundDataMap(map);
      });
  };

  const handleChange = () => setChanged(true);

  const collectTableData = (): RefundData[] => {
    const rows: RefundData[] = [];
    reasons.forEach((reason) => {
      ticketClasses.forEach((tc) => {
        const compoundKey = `${reason}_${tc}`;
        const existing = refundDataMap[compoundKey] || {};
        const row: any = {
          policyId: 1,
          routeType: "DOMESTIC",
          cabinType: "ECONOMY",
          ticketClass: tc,
          reason,
        };

        refundRows.forEach((r) => {
          const input = document.querySelector<
            HTMLInputElement | HTMLSelectElement
          >(
            `[data-reason="${reason}"][data-ticketclass="${tc}"][data-key="${r.key}"]`
          );
          if (input) {
            const value = input.value;
            row[r.key] =
              value === ""
                ? null
                : isNaN(Number(value))
                ? value
                : Number(value);
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

  const handleSave = () => {
    const payload = collectTableData();

    fetch("http://localhost:8093/api/v1/refund-metric/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Refund metrics saved successfully!");
          setChanged(false);
        } else {
          alert("Failed to save refund metrics");
        }
      })
      .catch(() => alert("Error occurred while saving data."));
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Refund Calculation
      </h1>

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
