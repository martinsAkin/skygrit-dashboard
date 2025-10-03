// import React from "react";
import { NavLink } from "react-router-dom";

const RequestRefundDashboard = () => {
  const headFields = [
    "Request ID",
    "Date",
    "Customer Name",
    "Type",
    "Email",
    "Amount",
    "Refund Value",
    "Status",
    "Actions",
  ];

  const data = [
    {
      id: "REQ1001",
      date: "2023-10-01 08:30 AM",
      customerName: "John Doe",
      type: "Cancellation",
      email: "michael.rivera@gmail.com",
      amount: "N534,000",
      refundValue: "N500,000",
      status: "Processed",
      actions: "View Details",
    },
    {
      id: "REQ1002",
      date: "2023-10-02 09:15 AM",
      customerName: "Chinbuike Victor",
      type: "Refund",
      email: "michael.mitc@example.com",
      amount: "N120,000",
      refundValue: "N100,000",
      status: "Approved",
      actions: "View Details",
    },
    {
      id: "REQ1003",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1004",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1005",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1006",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1007",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1008",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Pending",
      actions: "View Details",
    },
    {
      id: "REQ1009",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Approved",
      actions: "View Details",
    },
    {
      id: "REQ1010",
      date: "2023-10-03 10:45 AM",
      customerName: "Jason Njoku",
      type: "Cancellation",
      email: "kenzi.lawson@example.com",
      amount: "N300,000",
      refundValue: "N280,000",
      status: "Processed",
      actions: "View Details",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border-b border-[#E5E7EB]">
        {/* Table Header */}
        <thead>
          <tr>
            {headFields.map((field, index) => (
              <th
                key={index}
                className="p-3 text-left text-[10.5px] font-bold text-[#263238] border-b border-gray-200"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              {/* <NavLink to="/requests/data"> */}
                <td className="px-2 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.id}
                </td>
               {/* </NavLink>  */}
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.date}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.customerName}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.type}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.email}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.amount}
                </td>
                <td className="px-4 py-2 border-b border-gray-200 text-[12px] text-[#263238]">
                  {item.refundValue}
                </td>
              {/* </NavLink> */}
              <td
                className={`px-4 py-2 border-b border-gray-200 font-medium text-[12px] ${
                  item.status === "Processed"
                    ? "text-green-600"
                    : item.status === "Pending"
                    ? "text-yellow-600"
                    : "text-blue-600"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 text-[12px]">
                <NavLink to="/requests/data">
                  <button className="text-blue-600 hover:underline">
                    {item.actions}
                  </button>
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestRefundDashboard;
