/* eslint-disable @typescript-eslint/no-explicit-any */
import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import axios from "axios";
import { useState, useEffect } from "react";
import MenuUserMgt from "./molecules/MenuUserMgt";


interface User {
  userID: any;
  name: string;
  email: string;
  role: string;
  status: string;
}

const UserManagementTable = () => {
  const headFields = ["User ID", "Full Name", "Email", "Role", "Status", ""];
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    console.log("Edit user:", id)
    setOpenMenu(null)
  }

  const handleDeactivate = (id: number) => {
    console.log("deactivate user:", id)
    setOpenMenu(null)
  }

  const handleDelete = (id: number) => {
    console.log("Delete user:", id)
    setOpenMenu(null)
  }
  
  const [data, setData] = useState<User[]>([]);
  useEffect(() => {
    axios
      .get("/data/TableData.json") // ✅ served from public folder
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  if (data.length === 0) return <div>Loading....</div>;

  return (
    <div className="overflow-visible">
      <table className="w-full border-collapse border-b border-[#E5E7EB]">
        
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

        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 transition-colors duration-200"
            >
              <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
                REQ-{item.userID}
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
                className={`px-4 py-4 border-b border-gray-200 font-medium text-[13px] ${
                  item.status === "Active" ? "text-green-600" : "text-orange-700"
                }`}
              >
                {item.status}
              </td>
              <td className="px-4 py-2 border-b border-gray-200 relative">
                <button className="cursor-pointer" onClick={() => setOpenMenu(openMenu === item.userID ? null : item.userID)}>
                  <img src={menuOptIcon} alt="menu" title="menu" />
                </button>
                  { openMenu === item.userID && (
                    <div className="absolute right-4 top-8">
                      <MenuUserMgt 
                        onEdit={() => handleEdit(item.userID)}
                        onDeactivate={() => handleDeactivate(item.userID)}
                        onDelete={() => handleDelete(item.userID)}
                        onClose={() => setOpenMenu(null)}
                      />
                    </div>
                  ) }
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UserManagementTable;
