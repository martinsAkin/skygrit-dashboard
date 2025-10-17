import { useState } from "react";
import type { ModulesProps } from "../../interface";

const ApprovePaymentUpdate = ({ onCancel }: ModulesProps) => {
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
      <div className="bg-white p-9 w-[518px] h-[max-content] rounded-[8px]">
        <div className=" w-full flex flex-col gap-[36px]">
          {/* Headline */}
          <div className="flex flex-row items-center justify-between">
            <span className="p-3">
              <h2 className="text-[24px] font-[500] text-[#374151]">
                Payment Update
              </h2>
            </span>
            <span className="w-[36px] h-[36px]" onClick={handleCancel}>
              <img
                className="w-full"
                src="/assets/Icons/Cancel.svg"
                alt="cancel"
              />
            </span>
          </div>
          {/* Form */}

          <form action="#">
            <div className="flex flex-col gap-2.5">
              <label className="h-[24px] text-[16px] font-medium text-[#1F2937]">
                Refund Value
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter value"
                className="px-[16px] py-[12px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[14px] text-[#6E767A] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2.5">
              <label className="h-[24px] text-[16px] font-medium text-[#202223]">
                Comment (optional)
              </label>
              <textarea
                name="comment"
                required
                className="px-[16px] py-[12px] h-[120px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[14px] text-[#6E767A] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              />
            </div>
          </form>

          <div className="w-full h-[44px] flex gap-[10px] mt-8">
            <button
              className="w-[218px] h-[44px] border-2 border-[#E8E8E8] rounded-[4px] text-[16px] text-[#121212] font-medium"
              onClick={onCancel}
            >
              Cancel
            </button>
            <button className="w-[218px] h-[44px] bg-[#009639] rounded-[4px] text-[16px] text-white font-medium hover:bg-[#29b960] transition">
              Approve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApprovePaymentUpdate;
