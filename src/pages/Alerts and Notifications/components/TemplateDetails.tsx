// import { Info } from "lucide-react";
import TemplateDetailsComponent from "./TemplateDetailsComponent";
import prevPage from "/assets/Icons/move-left.png";
import { NavLink } from "react-router-dom";

// import React from 'react'
type info = {
  category: string;
  version: number | string;
  update: number | string;
};
const TemplateDetails = ({ category, version, update }: info) => {
  return (
    <div>
      <div className="py-4 px-16 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Booking Confirmation
          </h2>
          <span className="flex flex-row gap-6 mt-1">
            <p className="text-lg text-gray-500 mt-1">Category: {category}</p>
            <p className="text-lg text-gray-500 mt-1">Version: {version}</p>
            <p className="text-lg text-gray-500 mt-1">Updated: {update}</p>
          </span>
        </div>
        <div>
          <NavLink to="/notifications">
            <button className="bg-white text-blue-950 rounded-md px-3.5 py-0 text-md">
              <img
                src={prevPage}
                alt="go back"
                className="inline-block mr-2 h-[20px] w-[20px]"
              />
              Back
            </button>
          </NavLink>
        </div>
      </div>
      <TemplateDetailsComponent status="Published" />
    </div>
  );
};

export default TemplateDetails;
