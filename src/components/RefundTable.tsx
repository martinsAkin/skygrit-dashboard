import type {
  RefundTableProps,
  RefundCellProps,
  RefundRowProps,
  ActionBtnProps,
} from "../interface";

export default function RefundTable({
  ticketClasses,
  reasons,
  refundDataMap,
  refundRows,
  refundTimelineOptions,
  onChange,
}: RefundTableProps) {
  return (
    <table className="w-full border-collapse border border-gray-200 mb-6 text-sm">
      <thead>
        <tr>
          <th className="border border-gray-200 px-2 py-2 bg-gray-50 font-semibold">
            Reasons
          </th>
          <th className="border border-gray-200 px-2 py-2 bg-gray-50 font-semibold">
            Sub-Categories
          </th>
          {ticketClasses.map((tc) => (
            <th
              key={tc}
              className="border border-gray-200 px-2 py-2 bg-gray-50 font-semibold"
            >
              {tc}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {reasons.map((reason) =>
          refundRows.map((row, idx) => (
            <RefundRow
              key={`${reason}_${row.key}`}
              reason={reason}
              row={row}
              idx={idx}
              ticketClasses={ticketClasses}
              refundDataMap={refundDataMap}
              refundTimelineOptions={refundTimelineOptions}
              onChange={onChange}
            />
          ))
        )}
      </tbody>
    </table>
  );
}

export function RefundRow({
  reason,
  row,
  idx,
  ticketClasses,
  refundDataMap,
  refundTimelineOptions,
  onChange,
}: RefundRowProps) {
  return (
    <tr>
      {idx === 0 && (
        <th className="border border-gray-200 relative bg-blue-50" rowSpan={9}>
          {reason}
        </th>
      )}
      <th className="border border-gray-200 px-2 py-2 bg-gray-50">
        {row.label}
      </th>
      {ticketClasses.map((tc) => (
        <RefundCell
          key={tc}
          reason={reason}
          tc={tc}
          row={row}
          refundDataMap={refundDataMap}
          refundTimelineOptions={refundTimelineOptions}
          onChange={onChange}
        />
      ))}
    </tr>
  );
}

export function RefundCell({
  reason,
  tc,
  row,
  refundDataMap,
  refundTimelineOptions,
  onChange,
}: RefundCellProps) {
  const key = `${reason}_${tc}`;
  const refundData = refundDataMap[key];
  const val =
    refundData && row.key !== undefined ? refundData[row.key] ?? "" : "";

  return (
    <td
      className="border border-gray-200 px-2 py-2 text-center"
      data-reason={reason}
      data-ticketclass={tc}
      data-key={row.key}
    >
      {row.type === "select" ? (
        <select
          defaultValue={val}
          data-original={val}
          onChange={onChange}
          className="w-full p-1 border rounded bg-gray-50 focus:outline-blue-500"
        >
          {refundTimelineOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="number"
          defaultValue={val}
          data-original={val}
          onInput={onChange}
          className="w-full p-1 border rounded bg-gray-50 text-right focus:outline-blue-500"
        />
      )}
    </td>
  );
}

export function ActionButtons({ changed, onSave, onCancel }: ActionBtnProps) {
  return (
    <div className="flex justify-end gap-3">
      <button
        onClick={onCancel}
        className="px-6 py-2 rounded bg-gray-100 text-gray-700"
      >
        Cancel
      </button>
      <button
        disabled={!changed}
        onClick={onSave}
        className={`px-6 py-2 rounded text-white ${
          changed
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-blue-300 cursor-not-allowed"
        }`}
      >
        Save Changes
      </button>
    </div>
  );
}
