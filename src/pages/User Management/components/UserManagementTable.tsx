import menuOptIcon from "/assets/Icons/qlementine-icons_menu-dots-16.svg";
import { useState, useEffect } from "react";
import type { User } from "../../../interface";
import { fetchAddedUsers } from "../../../api/adminService";
import MenuUserMgt from "../../../components/molecules/MenuUserMgt";

const UserManagementTable = () => {
 const headFields = ["User ID", "Full Name", "Email", "Role", "Status", ""];
 const [openMenu, setOpenMenu] = useState<number | null>(null);
 const [userData, setUserData] = useState<User[]>([]);

 const handleEdit = (id: number) => {
  console.log("Edit user:", id);
  setOpenMenu(null);
 };

 const handleDeactivate = (id: number) => {
  console.log("deactivate user:", id);
  setOpenMenu(null);
 };

 const handleDelete = (id: number) => {
  console.log("Delete user:", id);
  setOpenMenu(null);
 };

 // .get("/data/TableData.json") // ✅ served from public folder
 useEffect(() => {
  fetchAddedUsers()
   .then(setUserData)
   .catch((error) => console.error("Error fetching JSON:", error));
 }, []);

  if (!Array.isArray(userData) || userData.length === 0) {
    return <div>Loading....</div>;
  }


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
     {userData.map((item, rowIndex) => (
      <tr
       key={rowIndex}
       className="hover:bg-gray-50 transition-colors duration-200"
      >
       <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
        REQ-{item.id}
       </td>
       <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
        {item.fullName}
       </td>
       <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
        {item.username}
       </td>
       <td className="px-4 py-4 border-b border-gray-200 text-[13px] text-[#263238]">
        {item.role}
       </td>
       <td
        className={`px-4 py-4 border-b border-gray-200 font-medium text-[13px] ${
         item.active ? "text-green-600" : "text-orange-700"
        }`}
       >
        {item.active ? "Active" : "Inactive"}
       </td>
       <td className="px-4 py-2 border-b border-gray-200 relative">
        <button
         className="cursor-pointer"
         onClick={() =>
          setOpenMenu(openMenu === item.id ? null : item.id)
         }
        >
         <img src={menuOptIcon} alt="menu" title="menu" />
        </button>
        {openMenu === item.id && (
         <div className="absolute right-4 top-8">
          <MenuUserMgt
           onEdit={() => handleEdit(item.id)}
           onDeactivate={() => handleDeactivate(item.id)}
           onDelete={() => handleDelete(item.id)}
           onClose={() => setOpenMenu(null)}
          />
         </div>
        )}
       </td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default UserManagementTable;
