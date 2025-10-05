/* eslint-disable @typescript-eslint/no-explicit-any */
import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import axios from "axios";
import { useState, useEffect } from "react";
// import AddUser from "./modules/AddUser";
// import MenuUserMgt from "./molecules/MenuUserMgt";

// Define the type for the user data
interface User {
  userID: any;
  name: string;
  email: string;
  role: string;
  status: string;
}

const UserManagementTable = () => {
  const headFields = ["User ID", "Full Name", "Email", "Role", "Status", ""];
  // const [data, setData] = useState([]);
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("/data/TableData.json") // ✅ served from public folder
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (data.length === 0) return <div>Loading....</div>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border-b border-[#E5E7EB]">
        {/* Table Header */}
        <thead>
          <tr>
            {headFields.map((field, index) => (
              <th
                key={index}
                className="p-4 text-left text-[13px] font-bold text-[#263238] border-b border-gray-200"
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
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {item.userID}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {item.name}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {item.email}
              </td>
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                {item.role}
              </td>
              <td
                className={`px-4 py-4 border-b border-gray-200 font-medium ${
                  item.status === "Active" ? "text-green-600" : "text-orange-700"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">
                <button className="cursor-pointer">
                  <img src={menuOptIcon} alt="menu" title="menu" />
                </button>
                {/* <MenuUserMgt /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserManagementTable;
