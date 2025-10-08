import React, { useEffect, useState } from "react";
import axios from "axios";
import notifyIcon from "/assets/notification.svg";
import searchIcon from "/assets/Icons/Searchhh.svg";

// ✅ 1. Define type for Admin data (no "any")
interface Admin {
  adminId: string | number;
  name: string;
  role: string;
}

const AuditTrail: React.FC = () => {
  const categories = ["User Activity Log", "Policy Activity Log"] as const;
  type Category = (typeof categories)[number];

  const [category, setCategory] = useState<Category>("User Activity Log");

  const [data, setData] = useState<Admin[]>([]);

  const [activeAdminId, setActiveAdminId] = useState<number | string | null>(
    null
  );

  const handleActive = (id: number | string): void => {
    setActiveAdminId((prev) => (prev === id ? null : id)); // toggle selection
  };

  // ✅ 5. Fetch JSON safely
  useEffect(() => {
    axios
      .get<Admin[]>("/data/AdminData.json")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <div className=" flex flex-col h-full">
      {/* Nav */}
      <nav className="py-2 px-16 bg-white border-b border-b-[#E5E7EB]">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-[20px] text-[#374151] font-semibold cursor-pointer">
            Hi, Arike
          </h2>
          <div className="flex flex-row gap-4 items-center">
            <img
              className="w-[36px] h-[36px] cursor-pointer"
              src={notifyIcon}
              alt="Notifications"
            />
            <span className="flex justify-center items-center rounded-full bg-[#F5F8FF] w-[42px] h-[42px] text-[14px] font-semibold text-[#F9956B]">
              AM
            </span>
            <p className="text-[14px] font-bold text-[#302C1C]">
              Arike Motunde
            </p>
          </div>
        </div>
      </nav>

      {/* Header + Categories */}
      <section className="py-2 px-16 bg-white border-b border-b-[#E5E7EB]">
        <div className="flex flex-row justify-between items-center">
          <div>
            <h2 className="text-2xl font-semibold">Audit Trail</h2>
            <p className="text-[12px] text-[#727372]">
              Track all logged activities here
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-col mt-12">
          <ul className="flex flex-row">
            {categories.map((list) => (
              <li
                key={list}
                className={`relative list-none p-4 text-[15px] border-b border-b-[#E5E7EB] cursor-pointer transition-colors ${
                  category === list
                    ? "text-[#202223] font-semibold"
                    : "text-[#6E767A]"
                }`}
                onClick={() => setCategory(list)}
              >
                {list}
                {category === list && (
                  <span className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#0D47A1] rounded-t-sm"></span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Activity Table */}
      <section className=" bg-white w-full flex-grow border border-[#F1F3F9] rounded-[8px] p-4">
        <div className="flex flex-col px-12 gap-3">
          {/* Search bar */}
          <div className="flex flex-row w-[387px] px-6 py-2 gap-4 bg-[#F3F4F6] border border-[#DCDEE6] rounded-[4px] items-center">
            <img src={searchIcon} alt="Search" />
            <input
              className="w-full py-2 outline-none text-[14px] font-medium bg-transparent"
              type="text"
              name="search"
              placeholder="Search with phone number"
            />
          </div>

          <div className="flex flex-row justify-between">
            {/* Left: user list */}
            <div className="w-[388px] border border-gray-300 rounded-md overflow-hidden">
              <h2 className="bg-[#E1E3E5] text-[16px] text-[#1F2937] font-semibold p-4">
                User
              </h2>

              <div className="max-h-[600px] overflow-y-auto">
                {data.length > 0 ? (
                  data.map((admin) => {
                    const isActive = activeAdminId === admin.adminId;
                    return (
                      <div
                        key={admin.adminId}
                        className={`flex flex-row px-4 py-2 justify-between items-center cursor-pointer ${
                          isActive
                            ? "bg-[#0D47A1] text-white"
                            : "bg-white text-[#1F2937]"
                        }`}
                        onClick={() => handleActive(admin.adminId)}
                      >
                        <p className="text-[14px] font-medium">{admin.name}</p>
                        <span
                          className={`px-[7.47px] py-[4.98px] text-[14px] rounded-[62.24px] ${
                            isActive
                              ? "bg-white text-[#0D47A1]"
                              : "bg-[#F3F3F3] text-[#474747]"
                          }`}
                        >
                          {admin.role}
                        </span>
                      </div>
                    );
                  })
                ) : (
                  <p className="p-4 text-sm text-gray-500">
                    No data available.
                  </p>
                )}
              </div>
            </div>

            {/* Right: placeholder for selected admin activity */}
            <div className="flex-1 border border-gray-300 rounded-md ml-6 p-4">
              {activeAdminId ? (
                <p className="text-gray-700">
                  Showing logs for admin ID:{" "}
                  <span className="font-semibold">{activeAdminId}</span>
                </p>
              ) : (
                <p className="text-gray-500">Select a user to view activity</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AuditTrail;
