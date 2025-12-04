// import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
const SettingContent = () => {
  const [formData, setFormData] = useState({
    apiKey: "",
    fromEmail: "",
    fromName: "",
    replyToEmail: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      apiKey: "",
      fromEmail: "",
      fromName: "",
      replyToEmail: "",
    });
  };
  return (
    <div>
      <form className="p-6" onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label className="text-xl font-medium block mb-2">API Key</label>
          <input
            type="text"
            name="apiKey"
            placeholder="*************"
            className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
            value={formData.apiKey}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">From Email</label>
            <input
              type="email"
              name="fromEmail"
              placeholder="notifications@skygrit.com"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.fromEmail}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="mb-6 w-full">
            <label className="text-xl font-medium block mb-2">From Name</label>
            <input
              type="text"
              name="fromName"
              placeholder="Skygrit Airlines"
              className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
              value={formData.fromName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="text-xl font-medium block mb-2">
            Reply To Email
          </label>
          <input
            type="email"
            name="replyToEmail"
            placeholder="notifications@skygrit.com"
            className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
            value={formData.replyToEmail}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="flex gap-2.5 mt-6 justify-end">
          <NavLink to="/notifications">
            <button
              type="button"
              onClick={handleCancel}
              className="p-2.5 rounded-lg text-[13px] bg-white border border-gray-400"
            >
              Cancel
            </button>
          </NavLink>

          <button
            className="p-2.5 rounded-lg text-[13px] bg-[#0D47A1] text-white"
            type="submit"
          >
            Save Configuration
          </button>
        </div>
      </form>
    </div>
  );
};

export default SettingContent;
