interface AnalyticsProps {
  analyticHeading: string;
  icon: string;
  value: string;
  metrics: string;
  duration: string;
  metricColor: string;
}

export const DashboardAnalytics = ({
  analyticHeading,
  icon,
  value,
  metrics,
  duration,
  metricColor,
}: AnalyticsProps) => {
  return (
    <div className="border-1 border-gray-300 rounded-[8px] px-[25px] py-[12px] flex-1 flex flex-col gap-4">
      <div className="flex justify-between">
        <ul className="list-none flex flex-col gap-0">
          <li className="text-[14px] font-medium text-[#4B5563]">
            {analyticHeading}
          </li>
          <li className="font-bold text-[#111827] text-2xl">{value}</li>
        </ul>

        <img src={icon} alt="icon" className="w-8 h-8" />
      </div>

      <span className="text-[12px] text-[#6B7280]">
        <span className="mr-3" style={{ color: metricColor }}>
          {metrics}
        </span>{" "}
        from last {duration}
      </span>
    </div>
  );
};

export const RefundCancellationTrends = () => {
  return (
    <section className="w-[65%] border-1 border-gray-300 p-4 rounded-md">
      <div className="flex justify-between items-center ">
        <span className="inline-block text-[18px] font-semibold text-[#111827]">
          Refund & Cancellation Trends
        </span>

        <ul className="list-none flex gap-2 items-center mr-[5rem] text-[#4B5563]">
          <li className="duration-hover">Weekly</li>
          <li className="duration-hover">Monthly</li>
          <li className="duration-hover">Yearly</li>
        </ul>
      </div>
    </section>
  );
};

interface ActivityItemsProps {
  icon: string;
  heading: string;
  text: string;
  timeStamp: string;
}

export const ActivityItems = ({
  icon,
  heading,
  text,
  timeStamp,
}: ActivityItemsProps) => {
  return (
    <div className="flex gap-3 mt-2">
      <img src={icon} alt="icon" className="h-8" />
      <ul className="list-none text-[13px]">
        <li className="font-semibold text-[#111827] text-[12px] mb-1">
          {heading}
        </li>
        <li className="text-[11px] text-[#6B7280] mb-1">{text}</li>
        <li className="text-[10px] text-[#9CA3AF] mb-1">
          {timeStamp} hour (s) ago
        </li>
      </ul>
    </div>
  );
};

export const PendingApproval = () => {
  return (
    <section className="border border-gray-300  p-3.5 mt-3 rounded-md overflow-x-auto">
      <div className="flex justify-between items-center">
        <span className="text-2xl font-semibold text-[#121212] mb-3">
          Pending Approvals
        </span>
        <span className="text-blue-600 hover:underline hover:cursor-pointer">
          View All
        </span>
      </div>

      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="text-[#1F2937] text-[13px] p-4 text-left">
          <tr>
            <th className="table-header">Request ID</th>
            <th className="table-header">Date</th>
            <th className="table-header">Customer Name</th>
            <th className="table-header">Type</th>
            <th className="table-header">Email</th>
            <th className="table-header">Amount</th>
            <th className="table-header">Status</th>
            <th className="table-header">Action</th>
          </tr>
        </thead>

        {/* data entires when the backend is connected
             <tbody>
               {data.map((row) => (
                    <tr key={requestID}>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                       <td></td>
                  </tr>
               ))}
             </tbody> */}
      </table>
    </section>
  );
};
