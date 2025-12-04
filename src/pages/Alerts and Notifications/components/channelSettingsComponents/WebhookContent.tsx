// import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const WebhookContent = () => {
  const [formData, setFormData] = useState({
    webHookUrl: "",
    webHookSecret: "",
    delivered: false,
    opened: false,
    clicked: false,
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
      webHookUrl: "",
      webHookSecret: "",
      delivered: false,
      opened: false,
      clicked: false,
    });
  };
  return (
    <div>
      <form className="p-6" onSubmit={handleFormSubmit}>
        <div className="mb-6">
          <label className="text-xl font-medium block mb-2">Webhook URL</label>
          <input
            type="text"
            name="webHookUrl"
            placeholder="https://api.skygrit.com/webhooks/sendgrid"
            className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
            value={formData.webHookUrl}
            onChange={handleInputChange}
            required
          />
          <p className="text-sm mt-2 text-gray-600">
            Endpoint to receive delivery status updates
          </p>
        </div>

        <div className="mb-6">
          <label className="text-xl font-medium block mb-2">
            Webhook Secret
          </label>
          <input
            type="password"
            name="webHookSecret"
            placeholder="*************"
            className="p-3 border border-[#C6C6C6] w-full rounded-md focus:outline-none"
            value={formData.webHookSecret}
            onChange={handleInputChange}
            required
          />
        </div>

        <section>
          <h2 className="text-lg mb-2 font-medium">Events to Subscribe</h2>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                name="delivered"
                checked={formData.delivered}
                onChange={handleInputChange}
              />
              <p>Delivered</p>
            </span>

            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                name="opened"
                checked={formData.opened}
                onChange={handleInputChange}
              />
              <p>Opened</p>
            </span>

            <span className="flex items-center gap-2.5">
              <input
                type="checkbox"
                name="clicked"
                checked={formData.clicked}
                onChange={handleInputChange}
              />
              <p>Clicked</p>
            </span>
          </div>
        </section>

        <div className="flex gap-2.5 mt-6 justify-end">
          <NavLink to="/notifications">
            <button
              type="button"
              onClick={handleCancel}
              className="p-2.5 rounded-lg text-[13px] bg-white border border-gray-400"
            >
              Test Webhook
            </button>
          </NavLink>

          <button
            className="p-2.5 rounded-lg text-[13px] bg-[#0D47A1] text-white"
            type="submit"
          >
            Save Webhook Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default WebhookContent;
