import { useState } from "react";
import ModulesBtnSet from "../molecules/ModulesBtnSet";
import type { ModulesProps } from "../../interface";

const RemoveTicketClass = ({ onCancel }: ModulesProps) => {
  const [visible, setVisible] = useState(false);
  const handleCancel = () => {
    setVisible(!visible);
  };
  return (
    <div
      className={`fixed inset-0 bg-black/50 flex justify-center items-center z-50 ${
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

          <ModulesBtnSet text2="Remove" onCancel={onCancel} />
        </div>
      </div>
    </div>
  );
};

export default RemoveTicketClass;
