import ModulesBtnSet from "../molecules/ModulesBtnSet";
import type { ModulesProps } from "../../interface";
import { addTicketClass } from "../../api/policyManagementService";
import { useState } from "react";

const AddTickets = ({ onCancel, onSuccess }: ModulesProps) => {
 const [ticketName, setTicketName] = useState("");

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
   await addTicketClass(ticketName);
   alert("Ticket class added successfully!");
   setTicketName("");
   onCancel();
   onSuccess();
  } catch (e) {
   console.error("Error:", e);
   alert("Adding Ticket class failed!");
  }
 };
 return (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-xl">
   <div className="bg-white p-9 w-[518px] h-[400px] rounded-[8px]">
    <div className=" w-full flex flex-col gap-[36px]">
     {/* Headline */}
     <div className="flex flex-row items-center justify-between">
      <span className="p-3">
       <h2 className="text-[24px] font-[500] text-[#374151]">
        Add Ticket Class
       </h2>
      </span>
      <span className="w-[36px] h-[36px]" onClick={onCancel}>
       <img className="w-full" src="/assets/Icons/Cancel.svg" alt="cancel" />
      </span>
     </div>
     {/* Form */}

     <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-2.5">
       <label className="h-[24px] text-[16px] font-medium text-[#1F2937]">
        Ticket Class Name
       </label>
       <input
        type="text"
        name="name"
        required
        placeholder="Enter Class Name"
        value={ticketName}
        onChange={(e) => setTicketName(e.target.value)}
        className="px-[16px] py-[12px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[14px] text-[#6E767A] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
       />
       <p className="text-[12px] font-normal text-[#6B6F80]">
        This will be displayed as a column in the policy matrix.
       </p>
      </div>

      <ModulesBtnSet text2="Add Ticket Class" onCancel={onCancel} />
     </form>
    </div>
   </div>
  </div>
 );
};

export default AddTickets;
