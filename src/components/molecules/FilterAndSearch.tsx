import { useState} from 'react'
import filterIcon from "/assets/Icons/filter.svg";
import dropdownIcon from "/assets/Icons/akar-icons_chevron-down.svg";
import searchIcon from "/assets/Icons/Search.svg";
import refreshIcon from "/assets/Icons/refresh-2.png";
import downIcon from "/assets/Icons/Down.png";


const FilterAndSearch = () => {
   const [filter, setFilter] = useState(false);
   
  return (
      <div className="flex flex-row justify-between mb-6">
                <div className="flex flex-row gap-6">
                  {/* Filter */}
                  <div className="relative">
                    <div
                      className="flex flex-row px-6 py-2 gap-4 border-[1px] border-[#DCDEE6] rounded-[4px] items-center cursor-pointer"
                      onClick={() => setFilter(!filter)}
                    >
                      <img
                        className="w-[20px] h-[20px]"
                        src={filterIcon}
                        alt=""
                      />
                      <p className="text-[14px] text-[#121212] font-medium">
                        Filter
                      </p>
                      <img
                        className={`w-[20px] h-[20px] transform transition-transform ${
                          filter ? "rotate-180" : "rotate-0"
                        }`}
                        src={dropdownIcon}
                        alt="dropdown"
                      />
                    </div>

                    {filter && (
                      <div className="absolute mt-2 left-0 bg-white shadow-lg w-56 p-4 rounded-md z-10">
                        <h3 className="text-sm font-semibold mb-3">
                          Filter Options
                        </h3>
                        {["Option A", "Option B", "Option C"].map(
                          (opt, index) => (
                            <label
                              key={index}
                              className="flex flex-row gap-3 items-center mb-2 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                className="cursor-pointer"
                              />
                              <span className="text-sm text-gray-700">
                                {opt}
                              </span>
                            </label>
                          )
                        )}
                        <div className="mt-3 flex justify-end">
                          <button
                            className="text-xs px-4 py-2 bg-[#0D47A1] text-white rounded hover:bg-blue-700"
                            onClick={() => setFilter(false)}
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Search */}
                  <div className="flex flex-row px-6 py-2 gap-4 bg-[#E5E7EB] border-[1px] border-[#DCDEE6] rounded-[4px] items-center">
                    <img src={searchIcon} alt="" />
                    <input
                      className="outline-0 text-[14px] font-medium bg-transparent"
                      type="text"
                      name="search"
                      placeholder="Search with phone number"
                    />
                  </div>
                </div>
                {/* Refresh & Download */}
                <div className="flex flex-row gap-3">
                  <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
                    <img src={refreshIcon} alt="" />
                    <p className="text-[14px] font-medium text-[#121212]">
                      Refresh
                    </p>
                  </div>
                  <div className="flex flex-row gap-2 border-[1px] px-6 py-2 border-[#DCDEE6] rounded-[4px] items-center cursor-pointer">
                    <p className="text-[14px] font-medium text-[#121212]">
                      Download
                    </p>
                    <img src={downIcon} alt="icon" />
                  </div>
                </div>
              </div>
  )
}

export default FilterAndSearch