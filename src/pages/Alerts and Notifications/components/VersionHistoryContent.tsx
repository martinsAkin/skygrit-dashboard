import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

interface VersionHistoryContentProps {
  id: string;
  versionHistory: string;
  category: string;
  status: string;
}

const initialVersionHistory: VersionHistoryContentProps[] = [
  {
    id: "1",
    versionHistory: "Version 2.1",
    category: "Templates",
    status: "Current",
  },
  {
    id: "2",
    versionHistory: "Version 2.0",
    category: "Templates",
    status,
  },
  {
    id: "3",
    versionHistory: "Version 1.0",
    category: "Templates",
    status,
  },
];

const VersionHistoryContent = () => {
  const navigate = useNavigate();
  const [versionHistory] = useState(initialVersionHistory);

  const handleCardClick = (id: string) => {
    navigate(`/versions/${id}`);
  };

  return (
    <div className="flex flex-col">
      {versionHistory.map((version) => (
        <div
          key={version.id}
          className="p-6 border border-[#DCDEE6] rounded-lg mb-4 hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => handleCardClick(version.id)}
        >
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-row items-center gap-9 flex-1">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {version.versionHistory}
                </h3>
              </div>
              <div>
                <span
                  className={`text-sm font-medium px-2 py-1 rounded-full ${
                    version.status === "Current"
                      ? "bg-blue-100 text-blue-800"
                      : version.status === "Draft"
                      ? "bg-gray-300 text-gray-800"
                      : version.status === ""
                      ? "null"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {version.status}
                </span>
              </div>
            </div>
            <NavLink to={`/restore-version/${version.id}`}>
              <p className="text-blue-500 text-lg font-semibold">Restore</p>
            </NavLink>
          </div>
          <p className="text-lg text-gray-600 mb-2">Updated check-in link</p>
          <div className="flex gap-7 items-center text-lg text-gray-600">
            <p>Updated: 2023-11-10</p>
            <p>By: admin@skygrit.com</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VersionHistoryContent;
