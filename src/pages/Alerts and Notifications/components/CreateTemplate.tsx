import { useState } from "react";
import messageChat from "/assets/Icons/materialEmail.svg";
import chat from "/assets/Icons/materialChat.svg";
import phone from "/assets/Icons/fluentPhone.svg";
import { NavLink } from "react-router-dom";

const CreateTemplate = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    email: false,
    sms: false,
    whatsapp: false,
    subject: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate at least one channel is selected
    if (!formData.email && !formData.sms && !formData.whatsapp) {
      alert("Please select at least one channel");
      return;
    }

    alert("Template created successfully!");
    console.log("Form data: ", formData);

    // TODO: Uncomment when API is ready
    // try {
    //   await createNewPolicy(formData);
    //   navigate("/templates");
    // } catch (error: any) {
    //   console.error("Something went wrong:", error.response?.data || error.message);
    // }
  };

  const handleCancel = () => {
    // Reset form or navigate back
    setFormData({
      name: "",
      category: "",
      email: false,
      sms: false,
      whatsapp: false,
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <div className="py-4 px-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Engine
          </h2>
          <p className="text-[14px] text-gray-500 mt-1">
            Configure and manage passenger communications across all channels
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Create New Template
          </h2>
          <div className="border border-[#DCDEE6] rounded-lg max-w-6xl">
            <div className="flex gap-16">
              <form
                className="border border-[#E5E7EB] p-6 rounded-lg flex-1"
                onSubmit={handleFormSubmit}
              >
                <section className="flex gap-8">
                  <div className="w-[50%]">
                    <label
                      htmlFor="name"
                      className="text-lg font-medium block mb-2"
                    >
                      Template Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter template name"
                      className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="w-[50%]">
                    <label
                      htmlFor="category"
                      className="text-lg font-medium block mb-2"
                    >
                      Category
                    </label>
                    <select
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                      required
                    >
                      <option value="">Select Template Category</option>
                      <option value="BOOKING">Booking</option>
                      <option value="FLIGHT_STATUS">Flight Status</option>
                      <option value="CHECK_IN">Check-in</option>
                      <option value="PROMOTIONAL">Promotional</option>
                    </select>
                  </div>
                </section>

                <section>
                  <div className="mt-4">
                    <label className="text-lg font-medium block mb-2">
                      Channel
                    </label>
                    <div className="flex gap-4">
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="email"
                          id="email"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.email}
                          onChange={handleInputChange}
                        />
                        <img src={messageChat} alt="email" />
                        <p>Email</p>
                      </span>
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="sms"
                          id="sms"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.sms}
                          onChange={handleInputChange}
                        />
                        <img src={chat} alt="chat" />
                        <p>SMS</p>
                      </span>
                      <span className="flex items-center gap-2.5">
                        <input
                          type="checkbox"
                          name="whatsapp"
                          id="whatsapp"
                          className="border border-[#C6C6C6] p-2.5 rounded-md focus:outline-none"
                          checked={formData.whatsapp}
                          onChange={handleInputChange}
                        />
                        <img src={phone} alt="phone" />
                        <p>WhatsApp</p>
                      </span>
                    </div>
                  </div>
                </section>

                <div className="mt-4">
                  <label
                    htmlFor="subject"
                    className="text-lg font-medium block mb-2"
                  >
                    Subject Line (Email)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your booking is confirmed - {{pnr}}"
                    className="p-3 border border-[#C6C6C6] w-[100%] rounded-md focus:outline-none"
                    value={formData.subject}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="message"
                    className="text-lg font-medium block mb-2"
                  >
                    Message Content
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="border border-[#C6C6C6] p-2.5 w-[100%] h-60 rounded-md focus:outline-none"
                    placeholder="Dear {{passenger_name}},&#10;Your booking is confirmed!&#10;PNR: {{pnr}}&#10;Flight: {{flight_number}}&#10;Departure: {{departure_time}}&#10;&#10;Thank you for choosing us!"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>

                <div className="flex gap-2.5 mt-6 justify-end">
                  <NavLink to="/notifications">
                    <button
                      type="button"
                      className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400"
                    >
                      Cancel
                    </button>
                  </NavLink>
                  <button
                    type="button"
                    className="p-2.5 rounded-lg text-[13px] text-black bg-white border border-gray-400"
                    onClick={handleCancel}
                  >
                    Save as Draft
                  </button>
                  <button
                    className="p-2.5 rounded-lg text-[13px] bg-blue-900 text-white"
                    type="submit"
                  >
                    Publish Template
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTemplate;
