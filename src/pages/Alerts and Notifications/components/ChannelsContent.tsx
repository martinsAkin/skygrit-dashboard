import { ChevronDown } from "lucide-react";
import { useState } from "react";
// import ChannelSettings from "./ChannelSettings";
import { useNavigate } from "react-router-dom";

interface ChannelsProps {
  id: number;
  provider: string;
  apiKey: string | number;
  email: string;
  name: string;
  status: string;
  senderID: string;
}

const initialChannel: ChannelsProps[] = [
  {
    id: 1,
    provider: "SendGrid",
    apiKey: "ooooooooooooo",
    email: "notifications@skygrit.com",
    name: "Skygrit Airlines",
    status: "Active",
    senderID: "SKYGRIT",
  },
  {
    id: 2,
    provider: "Termii",
    apiKey: "ooooooooooooo",
    email: "sms@skygrit.com",
    name: "Skygrit Airlines",
    status: "Active",
    senderID: "SKYGRIT",
  },
];

const ChannelsContent = () => {
  const [channels] = useState(initialChannel);
  const emailChannel = channels[0]; // Get email channel
  const smsChannel = channels[1]; // Get SMS channel
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/channelsetting/${id}`);
  };
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Channel Settings
        </h2>
        <p className="text-[14px] text-gray-500 mt-1">
          Configure delivery channels and provider settings
        </p>
      </div>
      <section className="mt-12 p-3">
        {/* Email Channel */}
        <div className="border border-gray-300 p-4 rounded-xl mb-6 overflow-hidden">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/assets/Icons/email.svg"
                alt="email"
                className="max-w-18 h-auto"
              />
              <span>
                <p className="text-2xl font-bold">Email</p>
                <p className="text-lg text-gray-600">
                  Provider: {emailChannel.provider}
                </p>
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <span
                className={`flex gap-2 px-3 py-1.5 items-center rounded-full ${
                  emailChannel.status === "Active"
                    ? " bg-green-100"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src="/assets/Icons/activeTick.svg"
                  alt="active"
                  className="max-w-6"
                />
                <p
                  className={
                    emailChannel.status === "Active"
                      ? "text-green-950"
                      : "text-gray-600"
                  }
                >
                  {emailChannel.status}
                </p>
              </span>
              <span onClick={() => handleCardClick(emailChannel.id.toString())}>
                <img src="/assets/Icons/settingIcon.svg" alt="setting" />
              </span>
            </div>
          </div>
          <section className=" flex flex-row gap-9 items-start p-4 mt-4">
            <div className="w-full">
              <h2 className="text-lg text-gray-600">Configuration</h2>
              <div className="flex flex-col mt-4 gap-5">
                <span className="flex justify-between items-center">
                  <p className="text-lg text-gray-400">Api Key</p>
                  <p className="font-bold">{String(emailChannel.apiKey)}</p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-lg text-gray-400">From Email:</p>
                  <p>{emailChannel.email}</p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-lg text-gray-400">From Name</p>
                  <p>{emailChannel.name}</p>
                </span>
              </div>
            </div>
            <div className="w-full">
              <Performance
                sent="8,234"
                delivered="8,156"
                failed="78"
                successRate="99.1%"
              />
            </div>
          </section>
          <section className="p-3">
            <div>
              <h2 className="text-gray-700">Retry & Failover Settings</h2>
              <div className="mt-4 flex gap-10">
                <div className="w-full">
                  <label htmlFor="max-retries">Max Retries</label>
                  <div className="relative mt-4">
                    <select
                      name="max-retries"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="retry-interval">Retry Interval</label>
                  <div className="relative mt-4">
                    <select
                      name="retry-interval"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="failover-channel">Failover Channel</label>
                  <div className="relative mt-4">
                    <select
                      name="failover-channel"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SMS Channel */}
        <div className="border border-gray-300 p-4 rounded-xl overflow-hidden">
          <div className="flex justify-between">
            <div className="flex gap-3 items-center">
              <img
                src="/assets/Icons/sms.svg"
                alt="sms"
                className="max-w-18 h-auto"
              />
              <span>
                <p className="text-2xl font-bold">SMS</p>
                <p className="text-lg text-gray-600">
                  Provider: {smsChannel.provider}
                </p>
              </span>
            </div>
            <div className="flex gap-4 justify-center items-center">
              <span
                className={`flex gap-2 px-3 py-1.5 items-center rounded-full ${
                  smsChannel.status === "Active"
                    ? " bg-green-100"
                    : "bg-gray-200"
                }`}
              >
                <img
                  src="/assets/Icons/activeTick.svg"
                  alt="active"
                  className="max-w-6"
                />
                <p
                  className={
                    smsChannel.status === "Active"
                      ? "text-green-950"
                      : "text-gray-600"
                  }
                >
                  {smsChannel.status}
                </p>
              </span>
              <span onClick={() => handleCardClick(smsChannel.id.toString())}>
                <img src="/assets/Icons/settingIcon.svg" alt="setting" />
              </span>
            </div>
          </div>
          <section className=" flex flex-row gap-9 items-start p-4 mt-4">
            <div className="w-full">
              <h2 className="text-lg text-gray-600">Configuration</h2>
              <div className="flex flex-col mt-4 gap-5">
                <span className="flex justify-between items-center">
                  <p className="text-lg text-gray-400">Api Key</p>
                  <p className="font-bold">{String(smsChannel.apiKey)}</p>
                </span>
                <span className="flex justify-between items-center">
                  <p className="text-lg text-gray-400">Sender ID:</p>
                  <p>{smsChannel.senderID}</p>
                </span>
              </div>
            </div>
            <div className="w-full">
              <Performance
                sent="5,421"
                delivered="5,398"
                failed="23"
                successRate="99.6%"
              />
            </div>
          </section>
          <section className="p-3">
            <div>
              <h2 className="text-gray-700">Retry & Failover Settings</h2>
              <div className="mt-4 flex gap-10">
                <div className="w-full">
                  <label htmlFor="max-retries-sms">Max Retries</label>
                  <div className="relative mt-4">
                    <select
                      name="max-retries-sms"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="retry-interval-sms">Retry Interval</label>
                  <div className="relative mt-4">
                    <select
                      name="retry-interval-sms"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
                <div className="w-full">
                  <label htmlFor="failover-channel-sms">Failover Channel</label>
                  <div className="relative mt-4">
                    <select
                      name="failover-channel-sms"
                      className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                    >
                      <option value="select">Select</option>
                    </select>
                    <ChevronDown
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                      size={18}
                      color="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="border border-gray-300 p-4 rounded-xl overflow-hidden mt-6 mb-20">
          <h3 className="text-2xl font-semibold mb-4">Test Notification</h3>
          <div className="flex gap-10">
            <div className="w-full">
              <label htmlFor="failover-channel-sms">Channel</label>
              <div className="relative mt-4">
                <select
                  name="failover-channel-sms"
                  className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                >
                  <option value="select">Select</option>
                  <option value="email">Email</option>
                  <option value="sms">SMS</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                  color="black"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="template">Template</label>
              <div className="relative mt-4">
                <select
                  name="failover-channel-sms"
                  className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                >
                  <option value="select">Select</option>
                  <option value="text">Booking Confirmation</option>
                  <option value="text">Booking Confirmation</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                  color="black"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="failover-channel-sms">Recipient</label>
              <div className="relative mt-4">
                <select
                  name="failover-channel-sms"
                  className="w-full appearance-none  bg-[#FAFAFA] border-[1.5px] border-[#E8E8E8] rounded px-5 py-3 pr-10 text-gray-700 focus:outline-none focus:border-blue-400 cursor-pointer text-sm"
                >
                  <option value="select">Select</option>
                  <option value="email">email@example.com</option>
                  <option value="sms">email@example.com</option>
                </select>
                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
                  size={18}
                  color="black"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChannelsContent;

interface PerformanceProps {
  sent: number | string;
  delivered: number | string;
  failed: number | string;
  successRate: string;
}

export const Performance = ({
  sent,
  delivered,
  failed,
  successRate,
}: PerformanceProps) => {
  return (
    <div className=" p-4">
      <h3 className="text-lg text-gray-600 mb-4">Performance (Last 24h)</h3>
      <div className="grid grid-cols-2 gap-5">
        <span className="flex flex-col w-80 py-6  px-3 rounded bg-[#F9FAFB]">
          <p className="text-sm text-gray-500">Sent</p>
          <p className="text-2xl font-semibold">{sent}</p>
        </span>
        <span className="flex flex-col w-80 py-6 px-3 rounded bg-[#F9FAFB]">
          <p className="text-sm text-gray-500">Delivered</p>
          <p className="text-2xl font-semibold text-green-600">{delivered}</p>
        </span>
        <span className="flex flex-col w-80 px-3 py-6 rounded bg-[#F9FAFB]">
          <p className="text-sm text-gray-500">Failed</p>
          <p className="text-2xl font-semibold text-red-600">{failed}</p>
        </span>
        <span className="flex flex-col w-80 py-6 px-3 rounded bg-[#F9FAFB]">
          <p className="text-sm text-gray-500">Success Rate</p>
          <p className="text-2xl font-semibold text-blue-600">{successRate}</p>
        </span>
      </div>
    </div>
  );
};
