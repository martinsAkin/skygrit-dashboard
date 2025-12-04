// import React from 'react'

interface deliveryLogProps {
  id: number;
  template: string;
  recipient: string | number;
  channel: string;
  status: string | boolean;
  sentAt: string | number;
  delivererdAt: string | number;
}

const initialDeliveryLogs: deliveryLogProps[] = [
  {
    id: 1,
    template: "Booking Confirmation",
    recipient: "michelle.rivera@example.com",
    channel: "Email",
    status: "Pending",
    sentAt: "2020-05-03 08:14:01",
    delivererdAt: "2020-05-03 08:14:01",
  },
  {
    id: 2,
    template: "Flight Delay Notification",
    recipient: "michelle.rivera@example.com",
    channel: "Email",
    status: "Delivered",
    sentAt: "2020-05-03 08:14:01",
    delivererdAt: "2020-05-03 08:14:01",
  },
  {
    id: 3,
    template: "Booking Confirmation",
    recipient: "michelle.rivera@example.com",
    channel: "SMS",
    status: "Failed",
    sentAt: "2020-05-03 08:14:01",
    delivererdAt: "2020-05-03 08:14:01",
  },
  {
    id: 4,
    template: "Booking Confirmation",
    recipient: "+2348090123456",
    channel: "Email",
    status: "Pending",
    sentAt: "2020-05-03 08:14:01",
    delivererdAt: "2020-05-03 08:14:01",
  },
  {
    id: 5,
    template: "Booking Confirmation",
    recipient: "michelle.rivera@example.com",
    channel: "SMS",
    status: "Delivered",
    sentAt: "2020-05-03 08:14:01",
    delivererdAt: "2020-05-03 08:14:01",
  },
];
const deliveryLogHead = [
  "Template",
  "Recipient",
  "Channel",
  "Status",
  "Sent at",
  "Delivered At",
];
const DeliveryLogs = () => {
  return (
    <div className="border-1 border-gray-300 rounded-[8px]">
      <div>
        <h2 className="p-3 text-2xl font-semibold">Recent Delivery Logs</h2>
      </div>
      <table className="w-full border-collapse border-b border-[#E5E7EB]">
        <thead>
          <tr>
            {deliveryLogHead.map((field, index) => (
              <th
                key={index}
                className="p-4 text-left text-[13px] font-bold text-[#263238] border-b border-gray-200"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {initialDeliveryLogs.map((log, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {log.template}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {log.recipient}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {log.channel}
              </td>
              <td
                className={`px-4 py-4 border-b border-gray-200 font-medium text-[13px] flex items-center gap-3 ${
                  log.status === "Delivered"
                    ? "text-green-500"
                    : "text-[#FE8F31] "
                }`}
              >
                <span
                  className={`w-[8px] h-[8px] rounded-full ${
                    log.status === "Delivered"
                      ? "bg-green-500"
                      : log.status === "Pending"
                      ? "bg-[#FE8F31] "
                      : "bg-red-500"
                  }`}
                >
                  {""}
                </span>
                {log.status}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {log.sentAt}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {log.delivererdAt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryLogs;
