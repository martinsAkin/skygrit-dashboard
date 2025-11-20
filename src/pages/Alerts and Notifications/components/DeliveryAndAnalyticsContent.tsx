// import React from 'react'

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
        <DashboardAnalytics
          analyticHeading="Total Sent"
          value="1,284"
          icon="assets/Container.png"
          metricColor="green"
        />
        <DashboardAnalytics
          analyticHeading="Delivered"
          value="1280"
          // icon="assets/Container (1).png"
          // metricColor="red"
          icon="assets/Container (3).png"
          metricColor="green"
        />
        <DashboardAnalytics
          analyticHeading="Pending"
          value="2"
          icon="assets/Container (1).png"
          metricColor="red"
        />
        <DashboardAnalytics
          analyticHeading="Failed"
          value="2"
          icon="assets/Container (2).png"
          metricColor="red"
        />
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
export const DashboardAnalytics = ({
  analyticHeading,
  icon,
  value,
  metricColor,
}: DeliveryAnalyticsProps) => {
  return (
    <div className="border-1 border-gray-300 rounded-[8px] px-[25px] py-[12px] flex-1 flex flex-col gap-4">
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
