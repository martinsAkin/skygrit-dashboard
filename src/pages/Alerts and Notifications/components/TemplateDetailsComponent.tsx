import { useState } from "react";
import editIcon from "/assets/Icons/edit-outline.svg";
import PreviewContent from "./PreviewContent";
import VersionHistoryContent from "./VersionHistoryContent";
import messageChat from "/assets/Icons/materialEmail.svg";
import chat from "/assets/Icons/materialChat.svg";
type prop = {
  status: string;
};
const TemplateDetailsComponent = ({ status }: prop) => {
  const [category, setCategory] = useState("Preview");
  return (
    <div className="py-4 px-16">
      <div className="flex gap-4">
        <div className="flex-2 border border-gray-200 rounded-lg">
          {/*Category head */}
          <div className="border-b border-gray-200 justify-between flex">
            <ul className="flex flex-row p-2">
              {["Preview", "Version History"].map((list) => (
                <li
                  key={list}
                  className={`p-4 text-[14px] cursor-pointer list-none relative
                            ${
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
            {/* Status and Edit button */}
            <div className="flex items-center gap-6 p-4">
              <span
                className={`text-lg font-medium px-3 py-1 rounded-full ${
                  status === "Published"
                    ? "bg-green-100 text-green-800"
                    : status === "Draft"
                    ? "bg-gray-300 text-gray-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {status}
              </span>
              <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                <img
                  src={editIcon}
                  alt="Edit"
                  // onClick={() => handleEdit("")}
                />
                <span className="text-lg font-medium text-gray-700">Edit</span>
              </button>
            </div>
          </div>
          {/* Content Area */}
          <div className="p-6">
            {category === "Preview" ? (
              <PreviewContent />
            ) : (
              <VersionHistoryContent />
            )}
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-6">
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-lg">
              <div className="p-4 border-b border-gray-300">
                <h3 className="text-xl">Template Info</h3>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-800">Channels</h3>
                <div className="flex flex-row gap-4 mt-3">
                  <span className="bg-gray-300 text-gray-700 p-1.5 flex items-center justify-center rounded-md gap-2">
                    <img src={messageChat} alt="email" />
                    <p>Email</p>
                  </span>
                  <span className="bg-gray-300 text-gray-700 p-1.5 flex items-center justify-center rounded-md">
                    <img src={chat} alt="chat" />
                    <p>SMS</p>
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-800">Created</h3>
                <div className="flex flex-col gap-1 mt-3">
                  <p>2023-10-15</p>
                  <p>By: admin@skygrit.com </p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg text-gray-800">Last Updated</h3>
                <div className="flex flex-col gap-1 mt-3">
                  <p>2023-10-15</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-lg">
              <div className="p-4 border-b border-gray-300">
                <h3 className="text-xl">Usage Statistics</h3>
              </div>
              <div className="p-4">
                <span className="flex justify-between">
                  <h3 className="text-lg text-gray-800">Total Sent</h3>
                  <h3 className="text-lg text-gray-800">1,284</h3>
                </span>
                <div className="flex flex-col gap-4 mt-3">
                  <h3>Delivered</h3>
                  <div>
                    <p className="text-[#009639]">1,284</p>
                    <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                      <span className="bg-gray- bg-[#009639] p-1.5 flex rounded-md absolute left-0 bottom-0 right-10"></span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="flex justify-between">
                  <h3 className="text-lg text-gray-800">Opened</h3>
                  <h3 className="text-lg text-blue-700">542</h3>
                </span>
                <div className="flex flex-col gap-4 mt-3">
                  <div>
                    <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                      <span className="bg-gray- bg-[#2563EB] p-1.5 flex rounded-md absolute left-0 bottom-0 right-90"></span>
                    </span>
                    <p className="text-gray-700 mt-1.5">42.7 % open rate</p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <span className="flex justify-between">
                  <h3 className="text-lg text-gray-800">Clicked</h3>
                  <h3 className="text-lg text-gray-200">187</h3>
                </span>
                <div className="flex flex-col gap-4 mt-3">
                  <div>
                    <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                      <span className="bg-gray-300 p-1.5 flex rounded-md absolute left-0 bottom-0 right-90"></span>
                    </span>
                    <p className="text-gray-700 mt-1.5">34.5 % click rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetailsComponent;
