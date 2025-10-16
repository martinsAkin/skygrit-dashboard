import { useState } from "react";
import type { ModulesProps } from "../../interface";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
const ReviewApproval = ({ onCancel }: ModulesProps) => {
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
                Review Approval?
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
              <label className="h-[24px] text-[16px] font-medium text-[#202223]">
                Reason for review
              </label>
              <textarea
                name="comment"
                required
                className="px-[16px] py-[12px] h-[120px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[14px] text-[#6E767A] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              />
            </div>
            <ModulesBtnSet text2="Review" onCancel={onCancel} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewApproval;
