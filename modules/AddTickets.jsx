import { useState } from "react";

const AddTickets = () => {
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(!visible);
  };
  return (
    <div
      className={`flex justify-center items-center bg-black w-screen h-screen backdrop-blur-xl ${
        !visible ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-9 w-[518px] h-[316px] rounded-[8px]">
        <div className=" w-full flex flex-col gap-[36px]">
          {/* Headline */}
          <div className="flex flex-row items-center justify-between">
            <span className="p-3">
              <h2 className="text-[24px] font-[500] text-[#374151]">
                Add Ticket Class
              </h2>
            </span>
            <span className="w-[36px] h-[36px]" onClick={handleCancel}>
              <img
                className="w-full"
                src="/src/assets/Icons/Cancel.svg"
                alt="cancel"
              />
            </span>
          </div>
          {/* Form */}

          <form action="#">
            <div className="flex flex-col gap-2.5">
              <label className="h-[24px] text-[16px] font-medium text-[#1F2937]">
                Ticket Class Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter Class Name"
                className="px-[16px] py-[12px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[14px] text-[#6E767A] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              />
              <p className="text-[12px] font-normal text-[#6B6F80]">
                This will be displayed as a column in the policy matrix.
              </p>
            </div>
          </form>
          <div className="w-full h-[44px] flex gap-[10px]">
            <button className="w-[218px] h-[44px] border-2 border-[#E8E8E8] rounded-[4px] text-[16px] text-[#121212] font-medium">
              Cancel
            </button>
            <button className="w-[218px] h-[44px] bg-[#0D47A1] rounded-[4px] text-[16px] text-white font-medium hover:bg-[#1565C0] transition">
              Add Ticket Class
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTickets;
