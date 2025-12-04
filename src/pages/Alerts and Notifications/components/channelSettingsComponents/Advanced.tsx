// import React from 'react'

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Advanced = () => {
  const [formData, setFormData] = useState({
    rateLimit: "",
    timeout: "",
    retryAttempt: "",
    retryDelay: "",
    trackEmailOpens: false,
    trackLinkClicks: false,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      rateLimit: "",
      timeout: "",
      retryAttempt: "",
      retryDelay: "",
      trackEmailOpens: false,
      trackLinkClicks: false,
    });
  };
  return (
    <div>
      <form className="p-6" onSubmit={handleFormSubmit}>
        <div className="flex gap-4">
          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">Rate Limit</label>
            <input
              type="text"
              name="rateLimit"
              placeholder="100 per minute"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.rateLimit}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">Timeout</label>
            <input
              type="text"
              name="timeout"
              placeholder="30 seconds"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.timeout}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="flex gap-4">
          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">
              Retry Attempt
            </label>
            <input
              type="number"
              name="retryAttempt"
              placeholder="3"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.retryAttempt}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">
              Retry Delay
            </label>
            <input
              type="text"
              name="retryDelay"
              placeholder="5 minutes"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.retryDelay}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <section>
          <div className="flex gap-4">
            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                name="trackEmailOpens"
                checked={formData.trackEmailOpens}
                onChange={handleInputChange}
              />
              <p>Track email opens</p>
            </span>

            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                name="trackLinkClicks"
                checked={formData.trackLinkClicks}
                onChange={handleInputChange}
              />
              <p>Track link clicks</p>
            </span>
          </div>
        </section>

        <div className="flex gap-2.5 mt-6 justify-end border-t border-t-gray-300 p-4">
          <NavLink to="/notifications">
            <button
              type="button"
              onClick={handleCancel}
              className="p-2.5 rounded-lg text-[13px] bg-white border border-gray-400"
            >
              Reset to Defaults
            </button>
          </NavLink>

          <button
            className="p-2.5 rounded-lg text-[13px] bg-[#0D47A1] text-white"
            type="submit"
          >
            Save Advanced Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Advanced;
