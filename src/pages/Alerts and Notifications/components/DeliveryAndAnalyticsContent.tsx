// import React from 'react'

import DeliveryLogs from "./DeliveryLogs";

const DeliveryAndAnalyticsContent = () => {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-semibold text-gray-800">
          Delivery & Analytics
        </h2>
        <p className="text-[14px] text-gray-500 mt-1">
          Monitor notification delivery status and engagement metrics
        </p>
      </div>
      <div className="flex gap-6 mt-6">
        <DeliveryDashboardAnalytics
          analyticHeading="Total Sent"
          value="1,284"
          icon="/assets/Container.png"
          metricColor="green"
        />
        <DeliveryDashboardAnalytics
          analyticHeading="Delivered"
          value="1280"
          // icon="assets/Container (1).png"
          // metricColor="red"
          icon="/assets/Container (3).png"
          metricColor="green"
        />
        <DeliveryDashboardAnalytics
          analyticHeading="Pending"
          value="2"
          icon="/assets/Container (1).png"
          metricColor="red"
        />
        <DeliveryDashboardAnalytics
          analyticHeading="Failed"
          value="2"
          icon="/assets/Container (2).png"
          metricColor="red"
        />
      </div>
      <div className="mt-10 border-1 border-gray-300 rounded-[8px]">
        <h3 className="p-3 border-b border-b-gray-300 text-lg">
          Engagement Metrics
        </h3>
        {/* Progress Analytics*/}
        <section className="flex flex-row justify-between items-center gap-10">
          <div className="p-4 flex-1">
            <span className="flex flex-col gap-1 justify-between">
              <h3 className="text-lg text-gray-600">Email Open Rate</h3>
              <h3 className="text-4xl font-semibold">42.3%</h3>
            </span>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                  <span className="bg-gray- bg-[#2563EB] p-1.5 flex rounded-md absolute left-0 bottom-0 right-90"></span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 flex-1">
            <span className="flex flex-col gap-1 justify-between">
              <h3 className="text-lg text-gray-600">Click-Through Rate</h3>
              <h3 className="text-4xl font-semibold">18.7%</h3>
            </span>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                  <span className="bg-gray- bg-[#009639] p-1.5 flex rounded-md absolute left-0 bottom-0 right-120"></span>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 flex-1">
            <span className="flex flex-col gap-1 justify-between">
              <h3 className="text-lg text-gray-600">Avg. Delivery Time</h3>
              <h3 className="text-4xl font-semibold">2.3s</h3>
            </span>
            <div className="flex flex-col gap-4 mt-3">
              <div>
                {/* <span className="bg-gray-200 p-1.5 flex rounded-md relative">
                  <span className="bg-gray- bg-[#2563EB] p-1.5 flex rounded-md absolute left-0 bottom-0 right-90"></span>
                </span> */}
                <p className=" text-green-600">-0.4s from average</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="mt-10">
        <DeliveryLogs />
      </div>
    </div>
  );
};

export default DeliveryAndAnalyticsContent;

interface DeliveryAnalyticsProps {
  analyticHeading: string;
  icon: string;
  value: string;
  metricColor: string;
}
export const DeliveryDashboardAnalytics = ({
  analyticHeading,
  icon,
  value,
  metricColor,
}: DeliveryAnalyticsProps) => {
  return (
    <div className="border-1 border-gray-300 rounded-[8px] px-6 py-3 flex-1 flex flex-col gap-4">
      <div className="flex justify-between">
        <ul className="list-none flex flex-col gap-0">
          <li className="text-[14px] font-medium text-[#4B5563]">
            {analyticHeading}
          </li>
          <li className="font-bold text-[#111827] text-2xl">{value}</li>
        </ul>

        <img src={icon} alt="icon" className="w-8 h-8" />
      </div>

      <span className="text-[12px] text-[#6B7280]">
        <span className="mr-3" style={{ color: metricColor }}></span>{" "}
      </span>
    </div>
  );
};
