import React, { useState } from "react";

const AddSubCategory = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCancel = () => {
    setVisible(!visible);
  };

  const subCategory = [
    "Refund Ticket Type",
    "Change Ticket Type",
    "Cancel Ticket Type",
  ];

  const handleSelect = (item) => {
    setSelectedCategory(item);
    setDropdownOpen(false);
  };

  return (
    <div
      className={`flex justify-center items-center bg-black w-screen h-screen backdrop-blur-xl ${
        !visible ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-9 w-[518px] h-[428px] rounded-[8px]">
        <div className="w-full flex flex-col gap-[36px]">
          {/* Header */}
          <div className="flex flex-row items-center justify-between">
            <span className="p-3">
              <h2 className="text-[24px] font-[500] text-[#374151]">
                Add Sub Category
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
              {/* Category */}
              <label
                htmlFor="category"
                className="h-[24px] text-[16px] font-medium text-[#1F2937]"
              >
                Category
              </label>
              <span className="relative flex flex-col">
                <input
                  id="category"
                  name="category"
                  value={selectedCategory}
                  readOnly
                  className="w-full h-[52px] border border-[#C6C6C6] rounded-[8px] px-3 text-[16px] text-[#202020] placeholder-[#8D8D8D] active:outline-none focus:outline-none cursor-pointer"
                  placeholder="Select Category"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                <img
                  className="w-[24px] h-[24px] absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  src="/src/assets/Icons/akar-icons_chevron-down.svg"
                  alt="dropdown"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {/* Dropdown */}
                {dropdownOpen && (
                  <ul className="absolute top-[56px] w-full bg-white border border-[#C6C6C6] rounded-[8px] shadow-md z-10">
                    {subCategory.map((item, index) => (
                      <li
                        key={index}
                        className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-[16px] text-[#202020]"
                        onClick={() => handleSelect(item)}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </span>

              {/* Sub Category */}
              <label
                htmlFor="subCategory"
                className="h-[24px] text-[16px] font-medium text-[#1F2937]"
              >
                Sub Category Name
              </label>
              <input
                id="subCategory"
                type="text"
                name="subCategory"
                required
                placeholder="Refund Ticket Type"
                className="px-[16px] py-[12px] border-[1px] border-[#C6C6C6] rounded-[4px] font-medium text-[16px] text-[#263238] placeholder-[#8D8D8D] active:outline-none focus:outline-none"
              />
              <p className="text-[12px] font-normal text-[#6B6F80]">
                This will be added to the selected category
              </p>
            </div>
          </form>

          {/* Actions */}
          <div className="w-full h-[44px] flex gap-[10px]">
            <button
              type="button"
              className="w-[218px] h-[44px] border-2 border-[#E8E8E8] rounded-[4px] text-[16px] text-[#121212] font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[218px] h-[44px] bg-[#0D47A1] rounded-[4px] text-[16px] text-white font-medium hover:bg-[#1565C0] transition"
            >
              Add Sub-Category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddSubCategory;
