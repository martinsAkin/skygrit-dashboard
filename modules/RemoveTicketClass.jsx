import { useState } from "react";
const RemoveTicketClass = () => {
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
      <div className="bg-white p-9 w-[467px] h-[308px] rounded-[8px]">
        <div className=" w-full flex flex-col gap-[36px]">
          {/* Headline */}
          <div className="flex flex-row items-center justify-between">
            <span className="p-3">
              <h2 className="text-[24px] font-[500] text-[#374151]">
                Remove Ticket Class
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
          {/* Message */}
          <div>
            <h2 className="text-[20px] text-center text-[#1F2937]">
              Are you sure you want to remove this ticket class YANKY from your
              Economy Ticket Refund Policy?
            </h2>
          </div>

          <div className="w-full h-[44px] flex gap-[10px]">
            <button className="w-[218px] h-[44px] border-2 border-[#E8E8E8] rounded-[4px] text-[16px] text-[#121212] font-medium">
              Cancel
            </button>
            <button className="w-[218px] h-[44px] bg-[#FF0226] rounded-[4px] text-[16px] text-white font-medium">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemoveTicketClass;
